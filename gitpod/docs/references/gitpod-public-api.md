---
section: gitpod-public-api
title: Gitpod public API
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod public API

> Access Tokens are currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/10798).

The Gitpod Public API grants direct access to Gitpod data for use cases such as integration into other 3rd party applications.

## Authentication

To access the public API, you will need to pass an [Access Token](/docs/configure/user-settings/access-tokens) as a an Authorization request header bearer token in the format `Bearer <your-access-token>`.

## API language clients

### Go

The following is an example of how to use the Go client library with the Public API for retrieving teams data. Replace the environment variable `PERSONAL_PAT` with your own personal access token, for example: `export PERSONAL_PAT=<your-personal-pat>`

```go
package main

import (
    "context"
    "fmt"
    "net/http"
    "os"

    connect "github.com/bufbuild/connect-go"

    gitpod_experimental_v1 "github.com/gitpod-io/gitpod/components/public-api/go/experimental/v1"
    gitpod_experimental_v1connect "github.com/gitpod-io/gitpod/components/public-api/go/experimental/v1/v1connect"
)

func main() {
    // Define an interceptor to attach credentials onto outgoing requests
    interceptor := connect.UnaryInterceptorFunc(func(next connect.UnaryFunc) connect.UnaryFunc {
        return connect.UnaryFunc(func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
            if req.Spec().IsClient {
                // Send a token with client requests.
                req.Header().Set("Authorization", "Bearer " + os.Getenv("PERSONAL_PAT"))
            }

            return next(ctx, req)
        })
    })

    // Construct a new client to interact with Gitpod
    client := gitpod_experimental_v1connect.NewTeamsServiceClient(http.DefaultClient, "https://api.gitpod.io", connect.WithInterceptors(
        interceptor,
    ))

    // Use the client to retreive teams
    response, err := client.ListTeams(context.Background(), connect.NewRequest(&gitpod_experimental_v1.ListTeamsRequest{}))
    fmt.Println(response, err)

}
```

### TypeScript

> 🚧 Under development

---

## API Reference

## Resource: Workspaces

### List all workspaces

Lists all the workspaces belongs to the authenticated user.

**Usage**: `listWorkspaces()`

**Request Parameters**:

| Parameter  |                Description                | Type  | Required |
| :--------: | :---------------------------------------: | :---: | :------: |
| `pageSize` | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

|    Parameter    |                                                       Description                                                        |  Type  |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `nextPageToken` |                                                     Next Page Token                                                      | string |
|  `workspaceId`  |                                                       Workspace Id                                                       | string |
|    `ownerId`    |                                                         User Id                                                          | string |
|   `projectId`   |                                                        Project Id                                                        | string |
|    `context`    |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|    `status`     | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Get a workspace

Returns a single workspace.

**Usage**: `getWorkspace()`

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

|   Parameter   |                                                       Description                                                        |  Type  |
| :-----------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `workspaceId` |                                                       Workspace Id                                                       | string |
|   `ownerId`   |                                                         User Id                                                          | string |
|  `projectId`  |                                                        Project Id                                                        | string |
|   `context`   |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|   `status`    | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Create & start workspace

Creates and starts a new workspace.

**Usage**: `createAndStartWorkspace()`

**Request Parameters**:

|  Parameter   |                Description                |  Type  | Required |
| :----------: | :---------------------------------------: | :----: | :------: |
| `contextUrl` | Context Url - git or prebuild or snapshot | string |   true   |
| `prebuildId` |      Prebuild Id, if prebuild exists      | string |  false   |

<br>

**Response Parameters**:

|   Parameter   |                Description                |  Type  |
| :-----------: | :---------------------------------------: | :----: |
| `workspaceId` | Workspace Id of created/started workspace | string |

### Get owner token

It returns the owner token of a workspace.

**Usage**: `getOwnerToken()`

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

| Parameter | Description |  Type  |
| :-------: | :---------: | :----: |
|  `token`  | Owner Token | string |

### Start workspace

Starts an older workspace (instance).

**Usage**: `startWorkspace()`

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|  `instanceId`  |         Instance Id          | string |
| `workspaceUrl` | URL of the started workspace | string |

### Stop workspace

Stops a running workspace (instance).

**Usage**: `stopWorkspace()`

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response**: A message of Workspace Stopped.

---

## Resource: Teams

### Create a team

Creates a team.

**Usage**: `createTeam()`

**Request Parameters**:

| Parameter | Description |  Type  | Required |
| :-------: | :---------: | :----: | :------: |
|  `name`   |  Team name  | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|      `id`      |         UUID of Team         | string |
|     `name`     |         Name of team         | string |
| `creationTime` |    Creation time of team     | string |
|     `slug`     | Short version of a Team name | string |
|   `members`    |  List of members in a team   | array  |

### List all teams

Lists all the teams belongs to the authenticated user.

**Usage**: `listTeams()`

Code Example:

following code is snippet of how to list all teams with client we have created in the [Usage](#usage) section above.

```go
response, err := client.ListTeams(context.Background(), gitpod_experimental_v1connect.NewRequest(&gitpod_experimental_v1.ListTeamsRequest{}))
```

**Request Parameters**:

| Parameter  |                Description                | Type  | Required |
| :--------: | :---------------------------------------: | :---: | :------: |
| `pageSize` | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

| Parameter |       Description       | Type  |
| :-------: | :---------------------: | :---: |
|  `teams`  | List of teams of a user | array |

### Join a team

Joins a team.

**Usage**: `joinTeam()`

**Request Parameters**:

|   Parameter    |    Description     |  Type  | Required |
| :------------: | :----------------: | :----: | :------: |
| `invitationId` | Team Invitation ID | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|      `id`      |         UUID of Team         | string |
|     `name`     |         Name of team         | string |
| `creationTime` |    Creation time of team     | string |
|     `slug`     | Short version of a Team name | string |
|   `members`    |  List of members in a team   | array  |

### Reset team invitation

Resets the team invitation.

**Usage**: `resetTeamInvitation()`

**Request Parameters**:

| Parameter |    Description     |  Type  | Required |
| :-------: | :----------------: | :----: | :------: |
| `teamId`  | Team Invitation ID | string |   true   |

<br>

**Response Parameters**:

| Parameter | Description  |  Type  |
| :-------: | :----------: | :----: |
|   `id`    | UUID of Team | string |

### Update a team

Updates a team.

**Usage**: `updateTeam()`

**Request Parameters**:

| Parameter |              Description               |  Type  | Required |
| :-------: | :------------------------------------: | :----: | :------: |
| `teamId`  |               Team name                | string |   true   |
| `userId`  | User ID of a team member being updated | string |   true   |
|  `role`   |             Role of a team             | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |                          Description                          |  Type  |
| :------------: | :-----------------------------------------------------------: | :----: |
|    `userId`    |                         UUID of Team                          | string |
|     `role`     |                         Name of team                          | string |
| `memberSince`  | Member since is the timestamp when the member joined the team | string |
|  `avatarUrl`   |               It is the URL for the Team Member               | string |
|   `fullName`   |                 Full name of the team member                  | string |
| `primaryEmail` |               Primary email of the team member                | string |

### Delete team member

Deletes a team member.

**Usage**: `deleteTeamMember()`

**Request Parameters**:

|   Parameter    |           Description           |  Type  | Required |
| :------------: | :-----------------------------: | :----: | :------: |
|    `teamId`    |            Team name            | string |   true   |
| `teamMemberId` | Id of team member being updated | string |   true   |

<br>

**Response**: It deletes the team member from the team.

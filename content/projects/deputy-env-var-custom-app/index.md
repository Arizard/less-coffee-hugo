---
title: "Deputy Environment Variables"
description: "Add global account variables to Deputy."
date: 2020-07-29T15:26:48+10:00
author: "Arie Oldman"
type: "project"
tags:
- Deputy
tech:
- Vue
- Decaf
draft: false
image: "nazarii-yurkov-m-VhHYQ4yFg-unsplash.jpg"
hero_image: "nazarii-yurkov-m-VhHYQ4yFg-unsplash.jpg"
hero_image_attribution: "https://unsplash.com/@simple_shooter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_attribution_text: Photo by Nazarii Yurkov on Unsplash
---

Environment Variables Custom App provides configurable global DeXML variables in a Deputy Account.

The project consists of two components:

1. The Deputy custom app (Vue application)
2. The DeCaf helper script

Some example use cases for an Environment Variable (env var):

1. Storing customer secrets without committing to git (OAuth tokens, SSH Keys)
2. Define employee ID filters or location ID filters for testing purposes.
3. Disable or enable scripts or features of scripts

## Project setup

1. Install the node dependencies
    ```
    npm install
    ```
2. Find `.env.blank`. Duplicate this file into the same directory and rename it to `.env.local`
3. Modify the contents of `.env.local`. Set the variables based on the account you are deploying to:

    ```shell script
    # Example
    EVCA_SUBDOMAIN="ariesboutiquegym.au"
    EVCA_API_TOKEN="60eafee2d40c1e1efba663def8e4d"
    ```
   
## Development

1. Compile with hot reload, in "development" stage (`NODE_ENV=development`):
    ```
    npm run serve
    ```

## Deployment

1. Navigate to the root project directory (same directory containing `package.json`)
2. Run `npm run build`
3. Run `npm run deploy`

### First Time Deployment

After deploying the first time, you must go into the Enterprise tab and add the custom app to a role.

## Usage

Example:

{{< highlight coffeescript >}}
# Get dependencies
runscript({id: "env_var_helper"})

# Get a scalar value (integer bit, integer, float, string)
blnEnabled = getFromEnv({strKey: "FEATURE_ENABLED", default: 0})
strAuth = getFromEnv({strKey: "FEATURE_AUTH", default: ""})

# Get an array - value is interpreted as a comma-separated list
arrEmployeeAllowed = getArrayFromEnv({strKey: "FEATURE_ALLOWED_EMPLOYEE_IDS"})

# Get an object - value is interpreted as JSON string
objParams = getObjectFromEnv({strKey: "FEATURE_PARAMS"})
{{< /highlight >}}

Environment variables are cached using Redis, so performance drop should be neglible. Regardless, it's best to only retrieve the variable once at the start of your script, because it's possible for the value to change part way through a script execution.

# Conventions

1. Environment Variable names:
    1. only contain **alphanumeric characters** and the **underscore character**.
    2. are always **upper case**
    3. always have the section/category in the first "word", e.g. `PHNW_WEEKLY_CHECK_ENABLED` has the section `PHNW` and will show up in the UI under **PHNW**. This is analogous to what feature or concept the variable belongs to.
    4. always uses plural nouns for lists and singular nouns for scalars.
2. Environment Variable values:
    1. are interpreted literally - do not include apostrophes for strings.
    2. are formatted as comma-separated lists when defining arrays.
    3. are formatted as JSON when defining objects.
    
# Screenshots

{{< articleImage env-var-custom-app.png "Screenshot of Env Var custom app" "Screenshot of Env Var Custom App in Bunnings Sandbox" >}}
{{< articleImage editing-variable.png "Filtering and editing an environment variable." "Filtering and editing an environment variable. Interacting with the text field for a variable causes Save and Delete to be shown." >}}


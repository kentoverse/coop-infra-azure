
# Portfolio RAG App

This project is a multi-user Retrieval-Augmented Generation (RAG) app built with a modern full-stack architecture:

---

## Frontend

 • Expo (React Native + TypeScript) for mobile and web UI
 • Responsive screens, navigation, and user interactions

## Backend

 • MCP Server (C#) hosted on Azure Container Apps
 • Handles user sessions, API orchestration, and RAG query processing

## RAG / Vector Storage

 • Pinecone, Cosmos DB, or PostgreSQL stores embeddings for fast retrieval

## AI / LLM

 • Azure OpenAI Service powers semantic search and generation

---

## Architecture Overview

 1. User input from the Expo app is sent via HTTPS to the MCP backend.
 2. MCP Server fetches relevant context from vector storage.
 3. Context + query is sent to Azure OpenAI for generation.
 4. MCP Server returns the response to the Expo frontend.

Here’s a version of your README.md with an ASCII architecture diagram included in Markdown format:

# Portfolio RAG App

This project is a **multi-user Retrieval-Augmented Generation (RAG) app** built with a modern full-stack architecture.

---

## Frontend

- **Expo (React Native + TypeScript)** for mobile and web UI
- Responsive screens, navigation, and user interactions

## Backend

- **MCP Server (C#)** hosted on **Azure Container Apps**
- Handles user sessions, API orchestration, and RAG query processing

## RAG / Vector Storage

- **Pinecone**, **Cosmos DB**, or **PostgreSQL** stores embeddings for fast retrieval

## AI / LLM

- **Azure OpenAI Service** powers semantic search and generation

---

## Architecture Overview

        ┌───────────────────────────┐
        │       Expo App (TS)       │
        │  - React Native screens   │
        │  - Navigation & UI       │
        └────────────┬────────────┘
                     │ HTTPS / REST API
                     ▼
        ┌───────────────────────────┐
        │    MCP Server (C#)        │
        │  - Azure Container Apps   │
        │  - User session handling  │
        │  - RAG orchestration      │
        │  - Custom API calls       │
        └───────┬─────────┬────────┘
                │         │
   ┌────────────┘         └────────────┐
   │                                  │
   ▼                                  ▼

┌───────────────┐                  ┌───────────────┐
│  Vector DB /  │                  │ Azure OpenAI  │
│  RAG Storage  │                  │   Service     │
│  - Pinecone   │                  │ - LLM / GPT  │
│  - Cosmos DB  │                  │ - Embeddings │
│  - PostgreSQL │                  └───────────────┘
└───────────────┘

---

## Key Features

- Multi-user support with session handling
- Secure Azure hosting with Container Apps
- Modular design allowing different vector databases or AI models
- Easy to extend for startup-ready features



---
---

powergentic/azd-mcp-csharp ![Awesome Badge](https://awesome.re/badge-flat2.svg)

An Azure Developer CLI (`azd`) template to deploy a [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server written in C# to Azure Container Apps using SSE Transport.

Prerequisites

To deploy this template you will need to have the following installed:

- [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview)
- [Docker](https://www.docker.com/)

Deployment

To use this template, follow these steps using the [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview):

1. Log in to Azure Developer CLI. This is only required once per-install.

    ```bash
        azd auth login
    ```

1. Initialize this template using `azd init`:

    ```bash
        azd init --template powergentic/azd-mcp-csharp
    ```

3. Ensure Docker Engine is running on your machine. This will be needed by `azd` to build the Docker image for the app prior to deployment to Azure Container Apps.

4. Use `azd up` to provision your Azure infrastructure and deploy the web application to Azure.

    ```bash
        azd up
    ```

5. Once the template has finished provisioning all resources, and Azure Container Apps has completed deploying the app container _(this can take a minute or so after `azd up` completes to finish)_, the MCP server will be running.

    ![Screenshot AZD UP completed successfully](/assets/screenshot-azd-up-completed.png)

6. To verify the MCP server is running, navigate your browser to the `/sse` url for the app within your browser.

    Example URL:

```text
    https://ca-mcp-vnv7lqmg46722.bravebeach-29a82758.eastus2.azurecontainerapps.io/sse
```

    This will open a streaming output within the browser that will look similar to the following:

    ![Screenshot of /sse endpoint on the MCP server](/assets/screenshot-sse-endpoint.png)


Architecture Diagram

![Diagram of Azure Resources provisioned with this template](assets/architecture.png)

In addition to deploying Azure Resources to host the MCP server, this template includes a `DOCKERFILE` that builds the MCP server app with C#.

Azure Resources

These are the Azure resources that are deployed with this template:

- **Container Apps Environment** - The environment for hosting the Container App
- **Container App** - The hosting for the MCP server app
- **Log Analytics** and **Application Insights** - Logging for the Container Apps Environment
- **Container Registry** - Used to deploy the custom Docker container for the app

---
### Author

This `azd` template was written by [Chris Pietschmann](https://pietschsoft.com), founder of [Powergentic.ai](https://powergentic.ai), Microsoft MVP, HashiCorp Ambassador, and Microsoft Certified Trainer (MCT).

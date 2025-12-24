
import { Question } from '../types';

export const agentforceQuestions: Question[] = [
  {
    id: 1000,
    text: "Universal Containers (UC) would like to implement the Sales Development Representative (SDR) Agent. Which channel consideration should UC be aware of while implementing it?",
    insight: "### SDR Agent Channel Requirements\n\n* **Messaging Focus**: The Agentforce SDR Agent is primarily designed for real-time interactions via **Salesforce Messaging** (Web Chat, In-App Chat).\n* **Lead Qualification**: Its core logic is optimized for interactive dialogs rather than asynchronous email-only threads.\n* **Deployment**: While it can send follow-up emails, the entry point must be a Messaging channel.",
    options: [
      {
        text: "SDR Agent must be deployed in the Messaging channel.",
        feedback: "**Correct.** Official documentation specifies Messaging as the primary interaction channel for SDR Agents.",
        isCorrect: true
      },
      {
        text: "SDR Agent only works in the Email channel.",
        feedback: "**Incorrect.** SDR Agents are not limited to email; their primary function relies on Messaging.",
        isCorrect: false
      },
      {
        text: "SDR Agent must also be deployed on the company website.",
        feedback: "**Incorrect.** Website deployment (via a chat widget) is an option, not a mandatory requirement for implementation.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1001,
    text: "Which element in the Omni-Channel Flow should be used to connect the flow with the agent?",
    insight: "### Omni-Channel Integration Logic\n\n* **Route Work**: This is the standard action used to direct incoming items (cases, chats) to the appropriate resource.\n* **Agent Routing**: For Agentforce, the **Route Work Action** connects the flow to the agent's queue or presence state.",
    options: [
      {
        text: "Route Work Action",
        feedback: "**Correct.** This action is the designated mechanism for linking flows to Agentforce agents.",
        isCorrect: true
      },
      {
        text: "Assignment",
        feedback: "**Incorrect.** The 'Assignment' element is for variable values, not for routing work items to agents.",
        isCorrect: false
      },
      {
        text: "Decision",
        feedback: "**Incorrect.** A 'Decision' element branches logic but does not perform the routing itself.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1002,
    text: "Universal Containers plans to enhance its sales team’s productivity using AI. Which specific requirement necessitates the use of Prompt Builder?",
    insight: "### Generative vs. Predictive AI\n\n* **Prompt Builder**: Best for **Generative** tasks like drafting content, emails, or summaries.\n* **Prediction Builder**: Used for **Predictive** tasks like churn risk or lifetime value.\n* **Use Case**: Drafting a newsletter is a creative text generation task perfectly suited for a prompt template.",
    options: [
      {
        text: "Creating a draft newsletter for an upcoming tradeshow.",
        feedback: "**Correct.** Generating new text based on context is the primary function of Prompt Builder.",
        isCorrect: true
      },
      {
        text: "Predicting the likelihood of customers churning or discontinuing their relationship with the company.",
        feedback: "**Incorrect.** Churn prediction is a predictive AI task handled by Einstein Prediction Builder.",
        isCorrect: false
      },
      {
        text: "Creating an estimated Customer Lifetime Value (CLV) with historical purchase data.",
        feedback: "**Incorrect.** CLV estimation involves analytical/predictive modeling, not text generation.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1003,
    text: "How does an Agent respond when it can’t understand the request or find any requested information?",
    insight: "### Agent Fallback Behavior\n\n* **Conversational UX**: Salesforce prioritizes helpfulness over technical errors.\n* **Fallback Prompt**: The default behavior is to use a **general fallback message** (e.g., 'I didn't quite get that') to encourage the user to rephrase.",
    options: [
      {
        text: "With a preconfigured message, based on the action type.",
        feedback: "**Incorrect.** Fallback responses are generally universal to the agent, not specific to an action type.",
        isCorrect: false
      },
      {
        text: "With a general message asking the user to rephrase the request.",
        feedback: "**Correct.** This aligns with conversational design principles to maintain flow even when comprehension fails.",
        isCorrect: true
      },
      {
        text: "With a generated error message.",
        feedback: "**Incorrect.** Agents avoid jargon-heavy or technical error messages to improve user experience.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1004,
    text: "A data scientist needs to view and manage models in Einstein Studio, and also needs to create prompt templates in Prompt Builder. Which permission sets should an Agentforce Specialist assign to the data scientist?",
    insight: "### Permission Set Requirements\n\n* **Model Management**: Requires **Data Cloud Admin** (or Einstein Studio specific admin rights) to manage external/internal models.\n* **Template Creation**: Requires **Prompt Template Manager** (Einstein Generative AI Admin) to access the workspace in Setup.",
    options: [
      {
        text: "Prompt Template Manager and Prompt Template User",
        feedback: "**Incorrect.** This lacks the permissions required to manage models in Einstein Studio/Data Cloud.",
        isCorrect: false
      },
      {
        text: "Data Cloud Admin and Prompt Template Manager",
        feedback: "**Correct.** This combination covers both the model governance and the generative template creation needs.",
        isCorrect: true
      },
      {
        text: "Prompt Template User and Data Cloud Admin",
        feedback: "**Incorrect.** 'Prompt Template User' allows execution only, not the creation/management required in the prompt.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1005,
    text: "Universal Containers (UC) wants to enable its sales team to get insights into product and competitor names mentioned during calls. How should UC meet this requirement?",
    insight: "### Einstein Conversation Insights (ECI) Configuration\n\n* **Keyword Limits**: ECI allows for a maximum of **25 custom keywords** (products or competitors) per category.\n* **Setup Steps**: Enable ECI -> Connect Provider (Zoom/Gong) -> Assign Permissions -> Define Keywords.",
    options: [
      {
        text: "Enable Einstein Conversation Insights, connect a recording provider, assign permission sets, and customize insights with up to 25 products.",
        feedback: "**Correct.** This accurately reflects the setup workflow and the 25-keyword limit.",
        isCorrect: true
      },
      {
        text: "Enable Einstein Conversation Insights, assign permission sets, define recording managers, and customize insights with up to 50 competitor names.",
        feedback: "**Incorrect.** The keyword limit is 25, not 50, and 'recording manager' is not a standard setup role.",
        isCorrect: false
      },
      {
        text: "Enable Einstein Conversation Insights, enable sales recording, assign permission sets, and customize insights with up to 50 products.",
        feedback: "**Incorrect.** ECI relies on external providers, and the keyword limit is 25.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1006,
    text: "Universal Containers wants to reduce overall customer support handling time by minimizing the time spent typing routine answers for common questions in-chat, and reducing the post-chat analysis by suggesting values for case fields. Which combination of Agentforce for Service features enables this effort?",
    insight: "### Service Efficiency Tools\n\n* **Einstein Reply Recommendations**: Saves time during the chat by suggesting common replies based on Knowledge and history.\n* **Case Classification**: Saves time after the chat by automatically predicting and filling field values like 'Reason' or 'Priority'.",
    options: [
      {
        text: "Einstein Reply Recommendations and Case Classification",
        feedback: "**Correct.** This pair directly addresses both in-chat typing and post-chat field entry.",
        isCorrect: true
      },
      {
        text: "Einstein Reply Recommendations and Case Summaries",
        feedback: "**Incorrect.** Case Summaries provide a recap but do not suggest individual field values for classification.",
        isCorrect: false
      },
      {
        text: "Einstein Service Replies and Work Summaries",
        feedback: "**Incorrect.** 'Einstein Service Replies' is a generic term; 'Work Summaries' is used for Field Service, not standard chat classification.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1007,
    text: "Universal Containers needs its sales reps to be able to only execute prompt templates. What should the company use to achieve this requirement?",
    insight: "### Executing vs. Managing Prompts\n\n* **Prompt Template User**: Grants the 'Run' permission required to invoke AI from record pages/flows.\n* **Prompt Template Manager**: Grants 'Create' and 'Edit' permissions in Setup.\n* **Governance**: Following the principle of least privilege, 'User' is the correct assignment for reps.",
    options: [
      {
        text: "Prompt Execute Template permission set",
        feedback: "**Incorrect.** This is a distractor; the standard name is 'Prompt Template User'.",
        isCorrect: false
      },
      {
        text: "Prompt Template User permission set",
        feedback: "**Correct.** This is the official permission set for users who only need to trigger generative outputs.",
        isCorrect: true
      },
      {
        text: "Prompt Template Manager permission set",
        feedback: "**Incorrect.** This provides administrative access, which is more than the requirement specifies.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1008,
    text: "Universal Containers would like to route SMS text messages to a service rep from an Agentforce Service Agent. Which Service Channel should the company use in the flow to ensure it’s routed properly?",
    insight: "### Service Channel Architecture\n\n* **Messaging Channel**: In Salesforce, SMS is a sub-type of the **Messaging** channel.\n* **Routing**: Omni-Channel flows use the Messaging channel to identify the type of work being routed.",
    options: [
      {
        text: "Messaging",
        feedback: "**Correct.** SMS is managed within the Messaging Service Channel framework.",
        isCorrect: true
      },
      {
        text: "Route Work Action",
        feedback: "**Incorrect.** 'Route Work' is the flow element that performs the routing, not the channel itself.",
        isCorrect: false
      },
      {
        text: "Live Agent",
        feedback: "**Incorrect.** Live Agent is a legacy chat tool and does not handle modern SMS routing.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1009,
    text: "Universal Containers (UC) has configured an Agentforce Data Library using Knowledge articles. When testing in Agent Builder and the Experience Cloud site, the agent is not responding with grounded Knowledge article information. However, when tested in Prompt Builder, the response returns correctly. What should UC do to troubleshoot the issue?",
    insight: "### Troubleshooting Grounding Failures\n\n* **Runtime Identity**: The Agent runs under a specific system user (**Agentforce Service Agent User**).\n* **Access Gap**: If Prompt Builder (Admin) works but the Agent doesn't, the Agent's system user usually lacks **Data Cloud User** permissions to access the indexed Knowledge library.",
    options: [
      {
        text: "Create a new permission set that assigns \"Manage Knowledge\" and assign it to the Agentforce Service Agent User.",
        feedback: "**Incorrect.** 'Manage Knowledge' is for authoring; the agent only needs read access to the library.",
        isCorrect: false
      },
      {
        text: "Ensure the assigned User permission set includes access to the prompt template used to access the Knowledge articles.",
        feedback: "**Incorrect.** Since the test works in Prompt Builder, the template is functional; the issue is data access.",
        isCorrect: false
      },
      {
        text: "Ensure the Data Cloud User permission set has been assigned to the Agentforce Service Agent User.",
        feedback: "**Correct.** The Agent user needs Data Cloud access to retrieve grounded Knowledge data at runtime.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1010,
    text: "Universal Containers (UC) wants to implement an AI-powered customer service agent that can: Retrieve proprietary policy documents that are stored as PDFs. Ensure responses are grounded in approved company data. What should UC do first?",
    insight: "### Grounding Unstructured Data\n\n* **Agentforce Data Library**: This is the dedicated container for uploading and indexing unstructured files like PDFs.\n* **RAG Process**: The Data Library enables Retrieval-Augmented Generation by making PDF content searchable via vector embeddings.",
    options: [
      {
        text: "Set up an Agentforce Data Library for AI retrieval of policy documents.",
        feedback: "**Correct.** This foundational step enables the agent to search and retrieve text from PDFs.",
        isCorrect: true
      },
      {
        text: "Expand the AI agent-s scope to search all Salesforce records.",
        feedback: "**Incorrect.** Searching standard CRM records won't help retrieve data from external PDF files.",
        isCorrect: false
      },
      {
        text: "Add the files to the content, and then select the data library option.",
        feedback: "**Incorrect.** Adding files to Salesforce Content isn't enough; they must be indexed via a Data Library.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1011,
    text: "An Agentforce Specialist is creating a custom action in Agentforce. Which option is available for the Agentforce Specialist to choose for the custom Agent action?",
    insight: "### Supported Action Types\n\n* **Salesforce Flows**: Autolaunched flows are the most common way to build complex, multi-step logic for agents.\n* **Apex**: Supported for programmatic requirements.\n* **Retrievers**: Supported for data fetching.",
    options: [
      {
        text: "Apex Trigger",
        feedback: "**Incorrect.** Triggers are event-driven and cannot be directly selected as an agent action.",
        isCorrect: false
      },
      {
        text: "SOQL",
        feedback: "**Incorrect.** SOQL is a query language, not an executable action type in Agent Builder.",
        isCorrect: false
      },
      {
        text: "Flows",
        feedback: "**Correct.** Flows are a native and flexible option for creating tailored agent functionality.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1012,
    text: "What is the importance of Action Instructions when creating a custom Agent action?",
    insight: "### Action Instructions Blueprint\n\n* **Purpose**: They define **how** the agent should execute the task and **what** the expected user experience should be.\n* **Context**: They guide the Atlas Reasoning Engine in choosing the action and understanding its constraints.",
    options: [
      {
        text: "Action Instructions define the expected user experience of an action.",
        feedback: "**Correct.** They act as the behavioral blueprint for the agent's interaction logic.",
        isCorrect: true
      },
      {
        text: "Action Instructions tell the user how to call this action in a conversation.",
        feedback: "**Incorrect.** Instructions are for the AI engine, not for training the human user on commands.",
        isCorrect: false
      },
      {
        text: "Action Instructions tell the large language model (LLM) which action to use.",
        feedback: "**Incorrect.** The LLM uses the action's description to *select* it; the instructions tell it how to *execute* it.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1013,
    text: "Universal Containers (UC) wants to enable its sales team to use AI to suggest recommended products from its catalog. Which type of prompt template should UC use?",
    insight: "### Choosing Template Types\n\n* **Flex Template**: Provides the most flexibility, allowing multiple input resources (Objects, Data Cloud) for custom logic like 'Recommendations'.\n* **Email/Summary**: Specialized for single tasks; less suitable for multi-input logic.",
    options: [
      {
        text: "Record summary prompt template",
        feedback: "**Incorrect.** This is specialized for recapping a single record's fields.",
        isCorrect: false
      },
      {
        text: "Email generation prompt template",
        feedback: "**Incorrect.** This is specialized for drafting outbound emails.",
        isCorrect: false
      },
      {
        text: "Flex prompt template",
        feedback: "**Correct.** Flex templates allow for the custom data inputs required for recommendation engines.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1014,
    text: "An Agentforce Specialist wants to troubleshoot their Agent’s performance. Where should the Agentforce Specialist go to access all user interactions with the Agent, including Agent errors, incorrectly triggered actions, and incomplete plans?",
    insight: "### Agent Observability\n\n* **Event Logs**: This is the primary source of truth for runtime execution. It tracks every turn, action selection, and error encountered.\n* **Plan Canvas**: Useful for testing *design* logic, but not for viewing historical *real-user* errors.",
    options: [
      {
        text: "Plan Canvas",
        feedback: "**Incorrect.** Plan Canvas is a design-time visualization tool for a single session.",
        isCorrect: false
      },
      {
        text: "Agent Settings",
        feedback: "**Incorrect.** Settings are for configuration, not for monitoring interaction history.",
        isCorrect: false
      },
      {
        text: "Event Logs",
        feedback: "**Correct.** Event Logs provide the full telemetry needed for production troubleshooting.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1015,
    text: "Universal Containers (UC) currently tracks Leads with a custom object. UC is preparing to implement the Sales Development Representative (SDR) Agent. Which consideration should UC keep in mind?",
    insight: "### SDR Agent Constraints\n\n* **Standard Coupling**: Prebuilt agents (like SDR) are hard-coded to work with **Standard Objects** (Lead, Contact).\n* **Custom Objects**: To use an SDR agent with a custom object, you would need to map the custom data back to standard Leads.",
    options: [
      {
        text: "Agentforce SDR only works with the standard Lead object.",
        feedback: "**Correct.** This prebuilt agent logic depends on standard Lead fields and statuses.",
        isCorrect: true
      },
      {
        text: "Agentforce SDR only works on Opportunities.",
        feedback: "**Incorrect.** The SDR agent's purpose is qualification *before* an opportunity is created.",
        isCorrect: false
      },
      {
        text: "Agentforce SDR only supports custom objects associated with Accounts.",
        feedback: "**Incorrect.** SDR agents do not natively support custom objects out of the box.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1016,
    text: "Universal Containers wants to implement a solution in Salesforce with a custom UX that allows users to enter a sales order number. Subsequently, the system will invoke a custom prompt template to create and display a summary of the sales order header and sales order details. Which solution should an Agentforce Specialist implement to meet this requirement?",
    insight: "### Custom AI UX Flows\n\n* **Screen Flow**: Essential for collecting user input (Order Number) and providing a 'custom UX'.\n* **Prompt Template Action**: Within the flow, this action passes the input to the AI and stores the 'Response' to be displayed on the next screen.",
    options: [
      {
        text: "Create an autolaunched flow and invoke the prompt template using the standard \"Prompt Template\" flow action.",
        feedback: "**Incorrect.** Autolaunched flows have no user interface; they cannot fulfill the 'custom UX' requirement.",
        isCorrect: false
      },
      {
        text: "Create a template-triggered prompt flow and invoke the prompt template using the standard \"Prompt Template\" flow action.",
        feedback: "**Incorrect.** 'Template-triggered prompt flow' is not a valid Salesforce flow type.",
        isCorrect: false
      },
      {
        text: "Create a screen flow to collect the sales order number and invoke the prompt template using the standard \"Prompt Template\" flow action.",
        feedback: "**Correct.** Screen flows combine data collection with AI processing for an interactive end-user experience.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1120,
    text: "What does it mean when a prompt template version is described as immutable?",
    insight: "### Version Control in Prompt Builder\n\n* **Immutability**: Once a specific version of a prompt template is **activated**, it cannot be modified.\n* **New Versions**: To make changes, you must create a new version of the template. This ensures that the AI's behavior remains stable in production.",
    options: [
      {
        text: "Only the latest version of a template can be activated.",
        feedback: "**Incorrect.** Any valid version can be activated depending on requirements.",
        isCorrect: false
      },
      {
        text: "Every modification on a template will be saved as a new version automatically.",
        feedback: "**Incorrect.** New versions must be created manually; automatic versioning is not a feature.",
        isCorrect: false
      },
      {
        text: "Prompt template version is activated; no further changes can be saved to that version.",
        feedback: "**Correct.** Activation locks the version, enforcing consistency for that iteration.",
        isCorrect: true
      }
    ]
  },
  {
    id: 1208,
    text: "Which object stores the conversation transcript between the customer and the agent?",
    insight: "### Conversation Storage\n\n* **Messaging Session**: This object is the container for the entire dialog history in Salesforce Messaging.\n* **Audit & AI**: Einstein uses these transcripts to generate 'Work Summaries' and 'Call Insights'.",
    options: [
      {
        text: "Messaging End User",
        feedback: "**Incorrect.** This object stores identity info (phone number, name) but not the chat text.",
        isCorrect: false
      },
      {
        text: "Messaging Session",
        feedback: "**Correct.** The Messaging Session contains the full record of messages, timestamps, and participants.",
        isCorrect: true
      },
      {
        text: "Case",
        feedback: "**Incorrect.** A Case tracks the issue, but the raw conversation is held in the related Messaging Session.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1211,
    text: "Universal Containers would like to route a service agent conversation to a human agent queue. Which tool connects the service agent to the human agent queue for escalation?",
    insight: "### AI to Human Handoff\n\n* **Outbound Omni-Channel Flow**: The specialized flow type used for handoffs.\n* **Automation**: It allows the AI to programmatically trigger a transfer based on user request or complexity.",
    options: [
      {
        text: "Outbound Omni-Channel Flow",
        feedback: "**Correct.** This is the standard tool for routing escalated conversations to human queues.",
        isCorrect: true
      },
      {
        text: "Screen Flow",
        feedback: "**Incorrect.** Screen flows require user interaction and aren't designed for automated handoff routing.",
        isCorrect: false
      },
      {
        text: "Prompt Flow",
        feedback: "**Incorrect.** 'Prompt Flow' is not a standard routing mechanism in Salesforce.",
        isCorrect: false
      }
    ]
  },
  {
    id: 1213,
    text: "A sales manager needs to contact leads at scale with hyper-relevant solutions and customized communications in the most efficient manner possible. Which Salesforce solution best suits this need?",
    insight: "### Scalable Personalization\n\n* **Prompt Builder**: Allows creating reusable 'Sales Email' templates that pull dynamic CRM data.\n* **Automation**: When paired with Flows, Prompt Builder can generate personalized content for thousands of leads automatically.",
    options: [
      {
        text: "Einstein Sales Assistant",
        feedback: "**Incorrect.** This is an interactive rep tool, not an automated solution for scale.",
        isCorrect: false
      },
      {
        text: "Prompt Builder",
        // Fixed: Removed trailing quote from 'feedback' key
        feedback: "**Correct.** It provides the generative engine to create customized communications at massive scale.",
        isCorrect: true
      },
      {
        text: "Einstein Lead follow-up",
        // Fixed: Removed trailing quote from 'feedback' key
        feedback: "**Incorrect.** This is a feature of Sales Cloud, not a standalone generative content engine.",
        isCorrect: false
      }
    ]
  }
];

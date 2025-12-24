
import { Question } from './types';

export const rlmQuestions: Question[] = [
  {
    id: 0,
    text: "A Billing Operations user at Universal Containers needs the system to automatically generate invoices every monday at 6:00AM for all completed billing schedules from the past week. How should the user configure this automation billing?",
    insight: "Recurring Invoice Runs allow for weekly scheduling.",
    options: [
      { text: "Define A Billing Treatment that references an Invoice Generation Time Field at the product level.", feedback: "", isCorrect: false },
      { text: "Schedule a Recurring Invoice Run with Weekly frequency and 6:00 AM start time.", feedback: "", isCorrect: true },
      { text: "Create a custom flow that runs nightly and generate invoices using the Invoice Preview feature", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 1,
    text: "A product designer created the necessary products and bundles using Product Catalog Management. However, user are not able to see the products while preparing quotes. Wich action should the product designer take to resolve this?",
    insight: "Context definitions map data for product discovery.",
    options: [
      { text: "Select the appropriate product selling model for each of the products.", feedback: "", isCorrect: false },
      { text: "Select the appropriate pricing procedure in the Salesforce Pricing Setup.", feedback: "", isCorrect: false },
      { text: "Select the appropriate context definition in the Product Discovery Settings.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 2,
    text: "A product administrator notices that the price of a warranty product is not being calculated correctly. It should be calculated as 10% of another equipment product's list price, but only when the products are purchased together in the same quote or order. How should the product administrator resolver this issue?",
    insight: "Transactional scope allows pricing based on other items in the same transaction.",
    options: [
      { text: "Find the Derived Price element and add the appropiate input/ouput variables in the pricing procedure.", feedback: "", isCorrect: false },
      { text: "Find the Derived Price record where Product = Warranty and set the Derived Pricing Scope to Transactional.", feedback: "", isCorrect: true },
      { text: "Find the price book entry of the equipment product and enable the IS Derived checkbox", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "A company is implementing Revenue Cloud to Automate its suscription renewals. A Revenue Cloud Consultant needs to configure the system to allow sales reps to initiate the renewal process for a customer's active asset directly from a record page. Which component must the consultant implement to provide this one-click renewal capability?",
    insight: "InitiateRenewal action in a Screen Flow is the standard approach.",
    options: [
      { text: "An apex trigger on the Contract that automatically clones the contract and its assets when the end date is approaching.", feedback: "", isCorrect: false },
      { text: "A screen flow that utilizes the InitiateRenewal incocalble action, which can then be exposed as a quick action on the Account or Contract record page.", feedback: "", isCorrect: true },
      { text: "A custom Renewal checkbox field on the Asset object that, when checket, triggers a Process Builder to create a renewal opportunity", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "A customer currently owns subscrition products with a term of 3 years. A ramped deal was configured to sell the products with a quantity of 20 in year one, 30 in year two, and 40 in year three. The price of the products is US $1,000 per year. What is the formula to calculate the current Monthly Recurring Revenue (MRR)?",
    insight: "MRR is (Quantity * Price) / 12 for the current period.",
    options: [
      { text: "MRR = (20 x $1,000) / 12", feedback: "", isCorrect: true },
      { text: "MRR = (20 x $1,000) / 36", feedback: "", isCorrect: false },
      { text: "MRR = ((20 x $1,000) + (20 x $1,000) + (20 x $1,000)) / 36", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "A Revenue Cloud Consultant is asked to provide a report on ordered internet service where upload/download speed is configurable and is required. Which objects should the consultant use in a custom report to retrieve this information?",
    insight: "Order Products and their Attributes store configuration values.",
    options: [
      { text: "Order Products, Order Product Attributes", feedback: "", isCorrect: true },
      { text: "Order Products Attributes, Products Attribute Definition.", feedback: "", isCorrect: false },
      { text: "Order Products, Product Attribute Definition", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "A customer reaches out to the Billing Operations requesting to change their monthly billing date from the 15th to the 20th, and for the next cycle to move it to April 22 only. Which steps should Billing Operations take?",
    insight: "BSG parameters control monthly billing days and one-time overrides.",
    options: [
      { text: "The Billing Operations user should select the Billing Schedule Group(s) (BSG) for that asset, and change the parameters on the transaction to the 20th for Billing Day of Month and to the 22nd of April for Override Next Billing Date by doing an inline edit.", feedback: "", isCorrect: true },
      { text: "The Billing Operations user should process an Amendment canceling the existing Asset and creating a new Asset with the start date of 20th.", feedback: "", isCorrect: false },
      { text: "The Billing Operations user should process a change order with Period Boundary Day on the Order Item as 20th.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "Universal Containers plans to sell directly to end users and wants bulk discounts only applicable to businesses. How should the Revenue Cloud Consultant solve this?",
    insight: "Sales Transaction types allow defining rules per channel.",
    options: [
      { text: "By using Quote Transaction Type and Volume-Based Pricing.", feedback: "", isCorrect: false },
      { text: "By using Sales Transaction Type and Volume-Based Pricing.", feedback: "", isCorrect: true },
      { text: "By using Order Transaction Type and Volume-Based Pricing.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "A new order is created. The account has a default billing address in San Francisco, the order has New York, and the attached Billing Account has Chicago. Which city will be used?",
    insight: "The Billing Account address takes precedence.",
    options: [
      { text: "New York", feedback: "", isCorrect: false },
      { text: "Chicago", feedback: "", isCorrect: true },
      { text: "San Francisco", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "How does Dynamic Revenue Orchestrator (DRO) help meet goals of single source of truth for order lifecycles?",
    insight: "DRO automates fulfillment and lifecycle visibility.",
    options: [
      { text: "DRO automates the revenue lifecycle.", feedback: "", isCorrect: false },
      { text: "DRO automates the order lifecycle and streamlines fulfilment.", feedback: "", isCorrect: true },
      { text: "DRO automates the the entire quote to order lifecycle.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "A customer sells in 38 countries but one product must be blocked in two specific countries. What is the minimal number of records for the rules?",
    insight: "Disqualification rules are most efficient for specific exclusions.",
    options: [
      { text: "Control availability with a recommendation rule.", feedback: "", isCorrect: false },
      { text: "Control availability with a qualification rule.", feedback: "", isCorrect: false },
      { text: "Control availability with a disqualification rule.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 11,
    text: "A product bundle needs to limit T-shirts and caps to max 3 each, but total max 5. How should this be set up?",
    insight: "Local cardinality limits individuals; Group cardinality limits the total.",
    options: [
      { text: "Define the local cardinality for T-shirts with a minimum quantity of three and a maximum quantity of three...", feedback: "", isCorrect: false },
      { text: "Define the local cardinality for T-shirts with a minimum quantity of one and a maximum quantity of three. Define the local cardinality caps with minimun quantity of one and a maximun quantity of three. Define a product group that contains both of these products, and set the group cardinality with a minimum quantity of one and maximum quantity of five.", feedback: "", isCorrect: true },
      { text: "Define the local cardinality for T-shirts with a minimum quantity of one and a maximum quantity of three.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 12,
    text: "A Sales user wants to maintain same prices during renewal despite upsells in the term. What should be enabled?",
    insight: "Lot-based or As-is renewals maintain historical pricing.",
    options: [
      { text: "Customize Assetize Order flow.", feedback: "", isCorrect: false },
      { text: "Set Pricing Source on Asset to last Negociated Price.", feedback: "", isCorrect: false },
      { text: "Enable Lot-based or As-is Renewals.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 13,
    text: "What is a primary reason to create Obligations in Revenue Cloud CLM?",
    insight: "Obligations track commitments via Tasks and Owners.",
    options: [
      { text: "Obligations can be assigned Owners and Tasks which helps track contractual commitments.", feedback: "", isCorrect: true },
      { text: "Obligations can be assigned the Fulfilled status to ensure compliance.", feedback: "", isCorrect: false },
      { text: "Obligations can be assigned Price Discounts to manage contract pricing agreements.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 14,
    text: "Sales user cannot see products in Browse Catalog. Why?",
    insight: "Active Price Book Entries in the quote's price book are required.",
    options: [
      { text: "The productcs are not asociated with an active price book entry that belongs to the price book selected on the Quote.", feedback: "", isCorrect: true },
      { text: "The sales user profile does not have the 'View All' on Product2 object permission.", feedback: "", isCorrect: false },
      { text: "The Product Discovery component on the Quote Layout is missconfigured.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 15,
    text: "Subscription starts March 20, ends Dec 31. Proration Period: Monthly, Boundary: Calendar. Multiplier for March?",
    insight: "Remaining days / Total days in the month.",
    options: [
      { text: "Proration Multiplier = Number of remaining days in March / Total number of days in March", feedback: "", isCorrect: true },
      { text: "Proration Multiplier = Number of days used in March / Total number of days in March", feedback: "", isCorrect: false },
      { text: "Proration Multiplier = Number of days used in year/ Total number of days in year", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 16,
    text: "Browse Products button is missing on Quote Page Layout. Why?",
    insight: "Product Discovery User permission set is required.",
    options: [
      { text: "The Revenue Cloud Consultant did not assingn the Product Configurator permission set.", feedback: "", isCorrect: false },
      { text: "The Revenue Cloud Consultant did not assingn the Product Configuration Rules Designer permission set.", feedback: "", isCorrect: false },
      { text: "The Revenue Cloud Consultant did not assingn the Product Discovery User permissions to the sales rep.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 17,
    text: "How to include a Product2 custom field for search in Quote context?",
    insight: "Indexing settings control searchable fields.",
    options: [
      { text: "Add Product2 custom field as a new filter option.", feedback: "", isCorrect: false },
      { text: "Use the Index and Search Configuration page to set the Product2 custom field as searchable and run Rebuild Index job.", feedback: "", isCorrect: true },
      { text: "Modify the Discover Products screen flow.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 18,
    text: "Which API retrieves products belonging to a specific catalog?",
    insight: "Products List (POST) is the correct business API.",
    options: [
      { text: "Products List (GET)", feedback: "", isCorrect: false },
      { text: "Product Related Records List (POST)", feedback: "", isCorrect: false },
      { text: "Products List (POST)", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 19,
    text: "Correct CML syntax for Desktop requires Monitor rule?",
    insight: "require() keyword in CML defines mandatory associations.",
    options: [
      { text: "type Quote { relation desktop : Desktop[0..99]; relation monitor : Monitor[0..99]; constraint(desktop, monitor, \"Desktop requires Monitor\"); }", feedback: "", isCorrect: false },
      { text: "type Quote { relation desktop : Desktop[0..99]; relation monitor : Monitor[0..99]; require(desktop [Desktop],monitor [Monitor], \"Desktop requires Monitor\"); }", feedback: "", isCorrect: true },
      { text: "type Quote { relation desktop : Desktop; relation monitor : Monitor; require(Desktop[Desktop],Monitor [Monitor], \"Desktop requires Monitor\"); }", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 20,
    text: "Critical issue on last day of UAT: Bug, Training, or Scope Creep? Next step?",
    insight: "Review against requirements to classify the issue correctly.",
    options: [
      { text: "All involved parties should review the issu, cross- referencing against the approved business requirements, and collaboratively determine if it is a legitimate defect, training gap, or a new requirement.", feedback: "", isCorrect: true },
      { text: "Escalate the issue to the steering committee.", feedback: "", isCorrect: false },
      { text: "The consultant should perform root cause analysis and fix it.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 21,
    text: "Furniture company wants user manuals shipped but not visible as quote lines. How?",
    insight: "Technical products with decomposition rules fulfill hidden requirements.",
    options: [
      { text: "Add the user manuals as quote line, but hide them.", feedback: "", isCorrect: false },
      { text: "Add the user manuals as an attribute.", feedback: "", isCorrect: false },
      { text: "Ad the user manuals as a technical product and create associated decomposition rule(s).", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 22,
    text: "Which dashboard shows MRR, ARR, and financial state after 90 days of go-live?",
    insight: "Subscription and Revenue Lifecycle Analytics is the specialized dashboard.",
    options: [
      { text: "Order Analytics.", feedback: "", isCorrect: false },
      { text: "Subscription and Revenue Lifecycle Analytics.", feedback: "", isCorrect: true },
      { text: "Pricing Analytics.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 23,
    text: "Complex Suites (Hardware, Software, Service) need tailored delivery plans. How?",
    insight: "Dynamic Revenue Orchestrator (DRO) handles complex order fulfillment.",
    options: [
      { text: "Dynamic Revenue Orchestrator (DRO)", feedback: "", isCorrect: true },
      { text: "Salesforce Experience Cloud for customer portal", feedback: "", isCorrect: false },
      { text: "Product Configurator", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 24,
    text: "Capture latest active Contract an Asset belongs to. Steps?",
    insight: "Mapping ContractId through context definitions ensures asset tracking.",
    options: [
      { text: "Build a Contract lookup field on Asset. Build a record-triggered flow.", feedback: "", isCorrect: false },
      { text: "Build a Contract lookup field on Asset. Create a ContractId tag in the context definition for Assets and map the contractId tag to this new Asset Contract lookup field. Update the OrderToAsset context definition to map Order's ContractId to Asset's ContractId tag.", feedback: "", isCorrect: true },
      { text: "Build a Contract lookup field on Asset. Use automation to find the lastest-dated Asset Contract Relationship.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 25,
    text: "Show warning message when 'Terabyte' attribute > 100. How?",
    insight: "Product-level constraint rules handle attribute validations.",
    options: [
      { text: "Create a constraint rule in the Constrain Model at Quote Level.", feedback: "", isCorrect: false },
      { text: "Create a custom Lightning web component.", feedback: "", isCorrect: false },
      { text: "Create a constraint rule in the Constraint Model at the Product Level.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 26,
    text: "Create Renewal Opportunities and Quotes/Orders out of the box. Tool?",
    insight: "Renewal Flow Templates automate renewal generation.",
    options: [
      { text: "Revenue Cloud Subscription Settings.", feedback: "", isCorrect: false },
      { text: "Renewal Flow Templates", feedback: "", isCorrect: true },
      { text: "Manage Apex classes", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 27,
    text: "Order line items cannot be changed after submission but before fulfillment. Why?",
    insight: "Activated orders lock line items to ensure processing integrity.",
    options: [
      { text: "The entire order is asseized.", feedback: "", isCorrect: false },
      { text: "The entire order is activated.", feedback: "", isCorrect: true },
      { text: "The entire order is decomposed.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 28,
    text: "Ensure accurate pipeline forecast based on opportunity data. Step?",
    insight: "Syncing the primary quote updates opportunity values.",
    options: [
      { text: "Set the Syncing field to True.", feedback: "", isCorrect: false },
      { text: "Sync the Primary quote.", feedback: "", isCorrect: true },
      { text: "Start Sync quick action.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 29,
    text: "Distinguish records created by Revenue Cloud from other processes. How?",
    insight: "Application Usage Assignment identifying RLM usage.",
    options: [
      { text: "Find a related record for the Application Usage Assignment object with the value of Revenue Lifecycle Management.", feedback: "", isCorrect: true },
      { text: "Verify that the Record Type of Quote and Order are set to Revenue Lifecycle Management.", feedback: "", isCorrect: false },
      { text: "Check Quote And Order Transaction Type field picklist value.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 30,
    text: "Set up contract extraction template to select existing context definition. Details?",
    insight: "Attribute Definition and Context Mapping are mandatory for context link.",
    options: [
      { text: "Record Type and Field Mapping.", feedback: "", isCorrect: false },
      { text: "Attribute Definition and Field Mapping.", feedback: "", isCorrect: false },
      { text: "Attribute Definition and Context Mapping.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 31,
    text: "Governance for product catalog with reusable attributes. Roles?",
    insight: "Split duties between Catalog Admin (Attributes) and Designer (Bundles).",
    options: [
      { text: "Product Managers own all catalog activities.", feedback: "", isCorrect: false },
      { text: "Catalog Administrator manages classifications and attributes. Product Designer defines product structures and bundles.", feedback: "", isCorrect: true },
      { text: "Sales Operations manages attributes and classifications.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 32,
    text: "Enable dashboards for order fallout per product line. Steps?",
    insight: "Complete Data Cloud configuration and install DRO Analytics App.",
    options: [
      { text: "Within Revenue Settings, enable Revenue Management Intelligence...", feedback: "", isCorrect: false },
      { text: "Whithin Revenue Management Intelligence Setup, complete Data Cloud Configurations and install the Dynamic Revenue Orchstrator Analytics App.", feedback: "", isCorrect: true },
      { text: "Within Tableau Unified Analitycs, create a recipe...", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 33,
    text: "Automated amendment lifecycle. True statement about the Opportunity?",
    insight: "Opportunities are optional and primarily for forecasting in amendments.",
    options: [
      { text: "It is an optional record used for forecasting purposes and does not directly participate in the asset update automation.", feedback: "", isCorrect: true },
      { text: "It directly updates the Asset record.", feedback: "", isCorrect: false },
      { text: "It is only required for amendments that involve a price increase.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 34,
    text: "Accurate statement regarding product modeling?",
    insight: "Configurable bundled products allow runtime customization.",
    options: [
      { text: "Simple products always require at least one child component.", feedback: "", isCorrect: false },
      { text: "Customers can choose different attributes for a static product.", feedback: "", isCorrect: false },
      { text: "A configurable bundled product allows users to customize components and attributes.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 35,
    text: "Remove 'None' option from quote-to-contract conversion popup. How?",
    insight: "Modify picklist values on Contract Item Price object.",
    options: [
      { text: "Modify the screen flow Create Contract From Quote.", feedback: "", isCorrect: false },
      { text: "Modify the Contract Item Price objects Discount Type field picklist values.", feedback: "", isCorrect: true },
      { text: "Modify the Lightning web component.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 36,
    text: "Work Anywhere Bundle: 5 VPNs (multiplier) + 1 training (constant). Scaling?",
    insight: "Proportional scales with quantity; Constant stays fixed at 1.",
    options: [
      { text: "VPN License = Proportional, Classroom Training = None.", feedback: "", isCorrect: false },
      { text: "VPN License = None, Classroom Training = Proportional.", feedback: "", isCorrect: false },
      { text: "VPN License = Proportional, Classroom Training = Constant", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 37,
    text: "Upgrade from $50 to $100 plan mid-cycle. Element to calculate credit/charge?",
    insight: "The Provision element handles mid-cycle calculation logic.",
    options: [
      { text: "The Derived Price element", feedback: "", isCorrect: false },
      { text: "The Aggregate Price element", feedback: "", isCorrect: false },
      { text: "The Provision element", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 38,
    text: "Apply pre-negotiated long-term agreement conditions consistently. How?",
    insight: "Contracted Pricing records enforce specific negotiated rates.",
    options: [
      { text: "Use Discount Schedules on relevant products.", feedback: "", isCorrect: false },
      { text: "Establish a dedicated price book for UC.", feedback: "", isCorrect: false },
      { text: "Create a Contracted Pricing record on the contract associated with the UC Account.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 39,
    text: "Prevent quotes without an Opportunity. How?",
    insight: "Quote Settings provides a toggle for this requirement.",
    options: [
      { text: "Create a validation rule on the Quote object.", feedback: "", isCorrect: false },
      { text: "Update Opportunity Settings.", feedback: "", isCorrect: false },
      { text: "Update Quote Settings and set \"Create Quotes Without a Related Opportunity\" to False.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 40,
    text: "Cloned Amend/Renew flow activated but original behavior continues. Missed step?",
    insight: "Point the Managing Assets flow in Revenue Settings to the new flow.",
    options: [
      { text: "The consultant did not select the new flow in the Manage Asset Viewer component.", feedback: "", isCorrect: false },
      { text: "The consultant did not update the managing assets flow under Revenue Settings to point to the new flow.", feedback: "", isCorrect: true },
      { text: "The consultant did not associate the new flow under Product Discovery.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 41,
    text: "Updated fiscal year prices. Deal configuration to refresh prices without disruption?",
    insight: "Standard Amendment with a reprice action updates the quote.",
    options: [
      { text: "Amend the original asset, negate the original quantity...", feedback: "", isCorrect: false },
      { text: "Amend the original asset, leave the original quantity, reprice the quote, and go through the Quote to Order process.", feedback: "", isCorrect: true },
      { text: "Change the end date of the Asset.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 42,
    text: "Add child product to existing constraint model. Steps?",
    insight: "CML Editor requires defining the new type then importing associations.",
    options: [
      { text: "Use the Visual Builder.", feedback: "", isCorrect: false },
      { text: "Once a bundle is updated, create a constraint model.", feedback: "", isCorrect: false },
      { text: "Create a new type for the child product in the Constraint Modeling Language (CML) Editor, then import the associations for the type from Product Catalog Management.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 43,
    text: "Refund/credit based on original purchase price (multiple purchases). Strategy?",
    insight: "FIFO (First In, First Out) uses the earliest asset price.",
    options: [
      { text: "FIFO (First In, First Out) – Uses the earliest asset's price to determine the refund or credit.", feedback: "", isCorrect: true },
      { text: "Average Cost.", feedback: "", isCorrect: false },
      { text: "LIFO.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 44,
    text: "Generate Asset Actions, Periods, and edit Lifecycle fields. Permission?",
    insight: "Customer Asset Lifecycle Management platform permission.",
    options: [
      { text: "Customer Asset Lifecycle Management", feedback: "", isCorrect: true },
      { text: "Lifecycle-managed asset", feedback: "", isCorrect: false },
      { text: "InitiateAmend, InitiateCancellation, InitiateRenewal", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 45,
    text: "BSG and BS behavior when amending? Correct understanding?",
    insight: "BSG groups all schedules (BS) for a product across amendments.",
    options: [
      { text: "A BSG groups related BSs under a single order product, even across amendments.", feedback: "", isCorrect: true },
      { text: "A BSG is used only for reporting.", feedback: "", isCorrect: false },
      { text: "BSs are manually created.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 46,
    text: "Generate 100s of line items in specific presentation format. Tool?",
    insight: "Document Builder is the standard proposal/document engine.",
    options: [
      { text: "Document Builder", feedback: "", isCorrect: true },
      { text: "Custom Report", feedback: "", isCorrect: false },
      { text: "OmniStudio Document Generation", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 47,
    text: "Sell smartphone with 12 monthly installments. Set up?",
    insight: "Term Monthly Selling Model Option defines the period logic.",
    options: [
      { text: "Assign a product selling model option of Term Annual.", feedback: "", isCorrect: false },
      { text: "Assign a product selling model option of Term Monthly to the product.", feedback: "", isCorrect: true },
      { text: "Assign a product selling model option of Evergreen Monthly.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 48,
    text: "Structure large M&A contracts for better navigation. Template tool?",
    insight: "Sections in templates allow modular structure and navigation.",
    options: [
      { text: "Create a structure in a document template.", feedback: "", isCorrect: false },
      { text: "Create child templates.", feedback: "", isCorrect: false },
      { text: "Create a section in a document template.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 49,
    text: "Display custom field in Transaction Line Editor. Method?",
    insight: "App Builder component configuration controls displayed fields.",
    options: [
      { text: "Add Estimated Delivery Date as a selected field to the Transaction Line Editor component in the Quote Lightning Record page.", feedback: "", isCorrect: true },
      { text: "Enable ‘Instant Pricing’.", feedback: "", isCorrect: false },
      { text: "Add the Estimated Delivery Date field to Quote Line Item layout.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 50,
    text: "Rationalize catalog for lease/buy options. Feature?",
    insight: "Selling Models allow one product record to support many models.",
    options: [
      { text: "Product selling model and product selling model option", feedback: "", isCorrect: true },
      { text: "Commercial products and Technical products", feedback: "", isCorrect: false },
      { text: "Multiple price books", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 51,
    text: "Limit component quantity to three in a bundle. How?",
    insight: "Local Cardinality defines the max quantity per bundle instance.",
    options: [
      { text: "Set the maximum number of components on the Group Cardinality.", feedback: "", isCorrect: false },
      { text: "Set the maximum quantity to three on the Product Record.", feedback: "", isCorrect: false },
      { text: "Set the maximum quantity field on the Local Cardinality of the desired component product to three.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 52,
    text: "Remove override renewal term option in Account view. How?",
    insight: "Modify the Renew Assets screen flow component.",
    options: [
      { text: "Modify the Lightning web component.", feedback: "", isCorrect: false },
      { text: "Modify the flow Amend, Renew, and Cancel Assets screen component.", feedback: "", isCorrect: false },
      { text: "Modify the flow Renew Assets screen component for renewal term and remove the option for early renewal.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 53,
    text: "Implement 2-day delay for provisioning. Delay option missing. Enable?",
    insight: "Future-Dated Steps setting in DRO enables time delays.",
    options: [
      { text: "Future-Dated Steps in the DRO settings", feedback: "", isCorrect: true },
      { text: "Modify All Data permission.", feedback: "", isCorrect: false },
      { text: "Link Task to Step Source button.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 54,
    text: "Correct sequence to Renew an Asset?",
    insight: "Standard flow: Renewal Quote -> Order -> Activate Order.",
    options: [
      { text: "Create Renewal Quote with Asset, Create Contract, Activate Contract", feedback: "", isCorrect: false },
      { text: "Create Renewal Quote with Asset, Create Order, Activate Order", feedback: "", isCorrect: true },
      { text: "Create Renewal Quote with Asset, Create Order, Activate Contract", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 55,
    text: "Multilingual API response for browsing catalog. Configuration?",
    insight: "Data translation + Product List/Details APIs support languages.",
    options: [
      { text: "Use data translation via Translation Workbench to modify metadata.", feedback: "", isCorrect: false },
      { text: "Provide data translations using standard Salesforce Product2 APIs.", feedback: "", isCorrect: false },
      { text: "Enable data translation and provide values via the Product List API and Product Details API", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 56,
    text: "Handle external tax for existing products while using Revenue Cloud. Process?",
    insight: "TaxEngineAdapter interface enables custom tax integrations.",
    options: [
      { text: "Integrate APPExchange apps.", feedback: "", isCorrect: false },
      { text: "Impor External Tax Lines via CSV.", feedback: "", isCorrect: false },
      { text: "Integrate the custom app with the Billing TaxEngineAdapter Apex interface.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 57,
    text: "Reusable color restriction rule across products. Approach?",
    insight: "Global constants in CML facilitate maintenance and reuse.",
    options: [
      { text: "Create a local variable called BlockedColor.", feedback: "", isCorrect: false },
      { text: "Hard code red directly.", feedback: "", isCorrect: false },
      { text: "Use a global constant for red so it can be referenced consistently across all constraint rules.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 58,
    text: "Ensure inherited attributes can be used for pricing. Step?",
    insight: "Flagging inherited attributes as Price Impacting at product level.",
    options: [
      { text: "Edit the attribute associated to a product classification.", feedback: "", isCorrect: false },
      { text: "Edit the attribute definition.", feedback: "", isCorrect: false },
      { text: "Edit the inherited attributes at the product level and set the 'Is Price Impacting' flag.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 59,
    text: "Define default entitlement for data storage. Object?",
    insight: "Product Usage Grants define specific entitlements.",
    options: [
      { text: "Product Usage Grant", feedback: "", isCorrect: true },
      { text: "Product Usage Resource", feedback: "", isCorrect: false },
      { text: "Rate Card Entries", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 60,
    text: "Attribute added to context but missing in pricing procedure. Missed step?",
    insight: "Context Definitions must be activated to be usable.",
    options: [
      { text: "Add a tag to the field attribute.", feedback: "", isCorrect: false },
      { text: "Activate the context definition.", feedback: "", isCorrect: true },
      { text: "Clone the pricing procedure.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 61,
    text: "Contracts AI: Payment method field missing after initial run. Fix?",
    insight: "Updating the extraction template mappings for the new field.",
    options: [
      { text: "Modify the contract extraction template to define the attribute mapping and context mapping for payment method.", feedback: "", isCorrect: true },
      { text: "Modify the AI prompt template.", feedback: "", isCorrect: false },
      { text: "Log a support case with Salesforce.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 62,
    text: "Migrate existing CPQ subscriptions to Revenue Cloud. Action?",
    insight: "Converting to order lines and using the Assetization API.",
    options: [
      { text: "Convert the subscriptions to order lines and use the Create or Update Asset From Order Item Action API.", feedback: "", isCorrect: true },
      { text: "Convert the subscriptions to orders and use Place Sales Transaction.", feedback: "", isCorrect: false },
      { text: "Convert the subscriptions to assets using Initiate Amendment.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 63,
    text: "Mark product as automatically renewable. How?",
    insight: "Auto Renew checkbox on the Product2 record.",
    options: [
      { text: "Select the Auto Renew checkbox on the product selling model.", feedback: "", isCorrect: false },
      { text: "Select the Auto Renew checkbox on the Asset object.", feedback: "", isCorrect: false },
      { text: "Select the Auto Renew checkbox on the Product2 object.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 64,
    text: "Solve data sync issues across PIM/Spreadsheets/ERP. Architecture?",
    insight: "Revenue Cloud as the Commercial Single Source of Truth.",
    options: [
      { text: "By establishing the Salesforce Product Catalog as the single source of truth for all commercial products...", feedback: "", isCorrect: true },
      { text: "By creating custom objects in Salesforce.", feedback: "", isCorrect: false },
      { text: "By using an integration platform to sync data nightly.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 65,
    text: "Set of records created automatically for usage management?",
    insight: "Usage Entitlement Accounts, Buckets, and Wallets manage usage.",
    options: [
      { text: "Asset, Entitlement Policy, Wallet", feedback: "", isCorrect: false },
      { text: "Product Consumption Summary, Rate Adjustment Entry, Billing Event", feedback: "", isCorrect: false },
      { text: "Usage Entitlement Account, Usage Entitlement Bucket, Wallet", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 66,
    text: "Restrict 'Cancel' button in Managed Assets to super users. Method?",
    insight: "Unassigning the InitiateCancellation API permission.",
    options: [
      { text: "Inactivate the Amend, Renew, and Cancel Assets screen flow.", feedback: "", isCorrect: false },
      { text: "Unassign InitiateCancellation API permission for users who should not have access to the cancel button.", feedback: "", isCorrect: true },
      { text: "Modify the Managed Asset Viewer page layout.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 67,
    text: "Collect payment before service begins (Advance). Billing Type?",
    insight: "Advance billing type generates invoices before the period.",
    options: [
      { text: "Arrear", feedback: "", isCorrect: false },
      { text: "Advance", feedback: "", isCorrect: true },
      { text: "None", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 68,
    text: "First diagnostic step for investigate unexpected pricing calculation?",
    insight: "Simulate functionality in pricing procedures traces the waterfall.",
    options: [
      { text: "Manually adjust the disputed total price.", feedback: "", isCorrect: false },
      { text: "Deactivate the entire pricing procedure.", feedback: "", isCorrect: false },
      { text: "Use the pricing procedure's Simulate functionality to trace the price waterfall.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 69,
    text: "First step to renew expired assets?",
    insight: "Override the renewal term in the Managed Assets component.",
    options: [
      { text: "Override Renewal Term using the Managed Assets Component on the Account/Contract record.", feedback: "", isCorrect: true },
      { text: "Update the Assets Lifecycle End Date.", feedback: "", isCorrect: false },
      { text: "Create a new Quote/Order record and manually add.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 70,
    text: "Advanced Decision Table logic for Partner AND >100 OR Accessory AND >100?",
    insight: "(1 AND 2) OR (2 AND 3) correctly maps the required conditions.",
    options: [
      { text: "Condition Type = Custom Logic & Custom Logic = (1 OR 2) AND (2 AND 3)", feedback: "", isCorrect: false },
      { text: "Condition Type = Custom Logic & Custom Logic = (1 AND 2) OR (2 AND 3)", feedback: "", isCorrect: true },
      { text: "Condition Type = All conditions are met (AND) & Custom Logic = 1 AND 2 AND 3", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 71,
    text: "Design product catalog to support multiple models without duplication. How?",
    insight: "Product classifications and flexible selling models at product level.",
    options: [
      { text: "Create separate product records for each business unit.", feedback: "", isCorrect: false },
      { text: "Use product classifications for attribute reuse and apply selling models at the product level to support flexibility.", feedback: "", isCorrect: true },
      { text: "Use static bundles with hard-coded attributes.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 72,
    text: "Sales rep needs to choose Renewal Quote or Order. Selection missing. Fix?",
    insight: "Global Revenue Cloud settings control available renewal modes.",
    options: [
      { text: "Customize the Manage Asset component.", feedback: "", isCorrect: false },
      { text: "Override the standard Salesforce flow.", feedback: "", isCorrect: false },
      { text: "Change the Revenue Cloud settings to allow renewal quote and order creation.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 73,
    text: "Transitioning from design to build phase. Ensure success how?",
    insight: "Environment setup and deployment tools are prerequisites for build.",
    options: [
      { text: "Set up environments for development, testing, and production, and choose a deployment tool.", feedback: "", isCorrect: true },
      { text: "Write user stories, have user workshops.", feedback: "", isCorrect: false },
      { text: "Build in the production environment.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 74,
    text: "Admin can view but not edit catalog. Fix?",
    insight: "Designer permission set license is required for catalog edits.",
    options: [
      { text: "Add the administrator to the Product Management Queue.", feedback: "", isCorrect: false },
      { text: "Grant the Modify All Data permission.", feedback: "", isCorrect: false },
      { text: "Assign the Product Catalog Management Designer permission set license to the administrator.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 75,
    text: "Activated flow changes for catalog browse not showing. Missed step?",
    insight: "Adding the new flow name in the Discovery Setup configuration.",
    options: [
      { text: "Adding the Flow Name in the Pricing Settings Setup.", feedback: "", isCorrect: false },
      { text: "Adding the Flow Name in the Product Discovery Setup.", feedback: "", isCorrect: true },
      { text: "Adding the Flow Name in the Revenue Settings Setup.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 76,
    text: "Sync Family field from Product2 to Quote Line without code. How?",
    insight: "Product Discovery Context maps fields to quote lines.",
    options: [
      { text: "Create an Apex trigger.", feedback: "", isCorrect: false },
      { text: "Update the Product Discovery Context by mapping the Catalog Product and the Product2 nodes and then mapping the Family and Family\\_c fields.", feedback: "", isCorrect: true },
      { text: "Update the Pricing context definition.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 77,
    text: "Solve SKU proliferation (1M SKUs) for workforce skills. How?",
    insight: "Attributes replace unique SKUs for variable service roles.",
    options: [
      { text: "Use Product Category to rationalize the product catalog.", feedback: "", isCorrect: false },
      { text: "Use Product Attributes to rationalize the product catalog.", feedback: "", isCorrect: true },
      { text: "Use Product Classification to rationalize the product catalog.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 78,
    text: "Capture negative balance for future settling (Memos). Which one?",
    insight: "Credit Memos represent negative invoice balances.",
    options: [
      { text: "Debit Memo", feedback: "", isCorrect: false },
      { text: "Cash Memo", feedback: "", isCorrect: false },
      { text: "Credit Memo", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 79,
    text: "Differentiate Revenue Cloud assets from legacy custom app assets. Out of box?",
    insight: "HasLifecycleManagement flag identifies RLM-managed assets.",
    options: [
      { text: "Use HasLifecycleManagement to identify the source as Revenue Cloud or Custom App.", feedback: "", isCorrect: true },
      { text: "Use a custom field.", feedback: "", isCorrect: false },
      { text: "Use Asset Action Source.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 80,
    text: "Dynamic bundle based on Opportunity Industry. Rule type?",
    insight: "Context-aware constraint rules reference parent nodes like Opportunity.",
    options: [
      { text: "By using a before-save flow.", feedback: "", isCorrect: false },
      { text: "By creating a Product Configuration Rule.", feedback: "", isCorrect: false },
      { text: "By defining a context-aware rule using the Constraint Model that references the Opportunity's industry field to enforce product selection or set attribute values", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 81,
    text: "Smart Approvals not working. Cause?",
    insight: "Matching conditions between stage and step are required for Smart Approvals.",
    options: [
      { text: "The condition in the stage is the same as the condition on the step.", feedback: "", isCorrect: true },
      { text: "The condition in the stage is not same.", feedback: "", isCorrect: false },
      { text: "There are two conditions on the stage.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 82,
    text: "Unified catalog for multiple LOBs with governance and reuse. Architecture?",
    insight: "Shared catalog with reusable components per business need.",
    options: [
      { text: "Lead with a shared catalog with reusable components, attributes, and selling models tailored per business need.", feedback: "", isCorrect: true },
      { text: "Prioritize stakeholder preferences for custom bundles.", feedback: "", isCorrect: false },
      { text: "Design multiple catalogs for each business unit.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 83,
    text: "Ship all commercial products together. Decomposition Scope?",
    insight: "Order scope groups all decomposed items within that order.",
    options: [
      { text: "Account", feedback: "", isCorrect: false },
      { text: "Order", feedback: "", isCorrect: true },
      { text: "Bundle", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 84,
    text: "Real-time product filtering based on Tier/Location. Context configuration?",
    insight: "Discovery context definitions handle real-time mapping for rules.",
    options: [
      { text: "Configure a Product Discovery context definition with nodes and attribute mappings for account tier and location, so this data can be evaluated by the rules during Browse Catalog.", feedback: "", isCorrect: true },
      { text: "Create a Sales Transaction context definition.", feedback: "", isCorrect: false },
      { text: "Use the Product2 object to create custom fields.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 85,
    text: "Report on attribute runtime values upon assetization. Objects?",
    insight: "State Period Attributes store values post-activation.",
    options: [
      { text: "Asset State Periods and Asset State Period Attributes", feedback: "", isCorrect: true },
      { text: "Asset State Periods and Order Product Attribute", feedback: "", isCorrect: false },
      { text: "Asset Action Source and Product Attribute Definition", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 86,
    text: "Integrate with which provider for CLM collaborative redlining?",
    insight: "Microsoft Azure powers the collaborative editing interface.",
    options: [
      { text: "Google Cloud Platform (GCP)", feedback: "", isCorrect: false },
      { text: "Microsoft Azure", feedback: "", isCorrect: true },
      { text: "Amazon Web Services (AWS)", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 87,
    text: "Valid query parameters for Products List (POST) API?",
    insight: "Standard identifiers for catalog filtering.",
    options: [
      { text: "Product2 IDs Catalog IDs Category IDs", feedback: "", isCorrect: true },
      { text: "Pricebook IDs Catalog IDs Category IDs", feedback: "", isCorrect: false },
      { text: "Catalog IDs ProductClassification IDs", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 88,
    text: "Decomposition Scope: Order Line Item. Result when multiple exist?",
    insight: "One fulfillment line per individual order item.",
    options: [
      { text: "For every order line item that decomposes, one instance of the fulfillment order line item is created per order item.", feedback: "", isCorrect: true },
      { text: "Multiple instances.", feedback: "", isCorrect: false },
      { text: "Single instance combining all.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 89,
    text: "Records for 3 memory x 2 term options in Attribute-Based adjustments?",
    insight: "Permutations of price-impacting attributes require unique records (3x2=6).",
    options: [
      { text: "6", feedback: "", isCorrect: true },
      { text: "3", feedback: "", isCorrect: false },
      { text: "5", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 90,
    text: "Ecommerce integration supporting 1000 items. Which API?",
    insight: "Place Sales Transaction handles high-scale ingestion.",
    options: [
      { text: "Create Order", feedback: "", isCorrect: false },
      { text: "Place Sales Transaction", feedback: "", isCorrect: true },
      { text: "Place Order", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 91,
    text: "Change price-impacting attributes without changing quantity. How?",
    insight: "Standard Amendments are used to update configuration states.",
    options: [
      { text: "Perform a Cancel/Replace.", feedback: "", isCorrect: false },
      { text: "Perform a Standard Amendment.", feedback: "", isCorrect: true },
      { text: "Perform an Early Renewal.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 92,
    text: "Inherit standard context while adding custom mappings. Method?",
    insight: "Extending definitions allows upgrades without losing custom logic.",
    options: [
      { text: "Upgrade SalesTransactionContext.", feedback: "", isCorrect: false },
      { text: "Clone SalesTransactionContext.", feedback: "", isCorrect: false },
      { text: "Extend SalesTransactionContext.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 93,
    text: "Configuration error after production deployment. Likely cause?",
    insight: "Pricing Setup page context definition mismatch with active procedures.",
    options: [
      { text: "The context definition for the pricing procedure must use the context definition selected on the Revenue Settings page.", feedback: "", isCorrect: false },
      { text: "The context definition for the pricing procedure must use the context definition selected on the Product Discovery Settings page.", feedback: "", isCorrect: false },
      { text: "The context definition for the pricing procedure must use the context definition selected on the Pricing Setup page.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 94,
    text: "Trace Asset renewal price back to original net unit price (As-is). How?",
    insight: "Asset Actions log the delta and history of values.",
    options: [
      { text: "Review the Asset's Asset State Period record(s).", feedback: "", isCorrect: false },
      { text: "Review the Asset's Asset Action Source record(s).", feedback: "", isCorrect: false },
      { text: "Review the Asset's Asset Action record(s).", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 95,
    text: "Sequence for deploying custom decision table into staging?",
    insight: "Deploy -> Map in Recipe -> Refresh/Sync.",
    options: [
      { text: "Deploy the decision table into the staging sandbox. Map the decision table in the default pricing recipe. Import the data for the decision table, then refresh the decision table.", feedback: "", isCorrect: false },
      { text: "Deploy the custom object and decision table into the staging sandbox. Map the decision table in the default pricing recipe. Import the data for the custom object, then sync Pricing.", feedback: "", isCorrect: false },
      { text: "Deploy the custom object and decision table into the staging sandbox. Map the decision table in the default pricing recipe. Refresh the decision table or sync Pricing.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 96,
    text: "What happens to Ramped Asset lines when renewed via API?",
    insight: "RLM renewal recreation logic persists the ramp structure.",
    options: [
      { text: "A quote line for each ramp segment is created but not ramped.", feedback: "", isCorrect: false },
      { text: "The Ramped Quote Lines are recreated onto the renewal quote.", feedback: "", isCorrect: true },
      { text: "One quote line is created for the Asset, and it is no longer ramped.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 97,
    text: "Steps after go-live for successful adoption?",
    insight: "Knowledge transfer and documentation empower the customer.",
    options: [
      { text: "Have knowledge transfer sessions on the implementation and provide help documentation/recordings.", feedback: "", isCorrect: true },
      { text: "Take customer inquiries post-project.", feedback: "", isCorrect: false },
      { text: "Have the customer get certified.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 98,
    text: "Skill set needed for omni-channel (REST/Integrations) implementation?",
    insight: "Salesforce Integration and REST APIs are foundational for headless commerce.",
    options: [
      { text: "Expertise in Salesforce Integration, including REST APIs", feedback: "", isCorrect: true },
      { text: "Expertise in Salesforce flows", feedback: "", isCorrect: false },
      { text: "Expertise in Apex and Lightning Web Component development", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 99,
    text: "Product active but not appearing in Discovery Catalog. Missed step?",
    insight: "Rebuilding the index is required after catalog modifications.",
    options: [
      { text: "Rebuild Constraint Model.", feedback: "", isCorrect: false },
      { text: "Rebuild Ramp Segment.", feedback: "", isCorrect: false },
      { text: "Rebuild Index.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 100,
    text: "Objects needed for discovery of migration (installed base)?",
    insight: "Asset Actions and Periods are critical for migration integrity.",
    options: [
      { text: "Asset, Asset Action, Asset State Period, Asset Action Source", feedback: "", isCorrect: true },
      { text: "Asset, Subscription, Subscribed Asset, Order", feedback: "", isCorrect: false },
      { text: "Quote, Order, Quote Line, Order Product", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 101,
    text: "Safe Harbor approach to suggestions based on future roadmaps?",
    insight: "Only build on Generally Available (GA) features.",
    options: [
      { text: "The team can design and build based on the future roadmap.", feedback: "", isCorrect: false },
      { text: "All design elements must adhere to the current, generally available features and avoid any unreleased features shown on the roadmap.", feedback: "", isCorrect: true },
      { text: "With verbal confirmation, incorporate roadmap items.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 102,
    text: "Primary role of Context Service in revenue operations?",
    insight: "Context service provides variables/data for calculations.",
    options: [
      { text: "To automate the generation of official sales contracts.", feedback: "", isCorrect: false },
      { text: "To provide and manage the relevant data inputs and variables required for transactional calculations", feedback: "", isCorrect: true },
      { text: "To streamline the precise creation and management of product catalogs.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 103,
    text: "CML to require MediaRoom(Blue) when rooms > 3. Construct?",
    insight: "relation size check + attribute filter in require().",
    options: [
      { text: "type House { relation rooms : Room[4,5]; require(rooms.size > 3, rooms[MediaRoom]{color=\"Blue\"}) };", feedback: "", isCorrect: false },
      { text: "type House { relation rooms : Room[0 .. 5]; require(rooms.size > 3, rooms[MediaRoom]{color=\"Blue\"}) };", feedback: "", isCorrect: true },
      { text: "type House { relation rooms : Room[0 .. 5]; require(rooms.size > 3, House[MediaRoom=true, color= \"Blue\"]) };", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 104,
    text: "CML Script for House with rooms instantiated in order (Living, Bed)?",
    insight: "order() keyword controls instantiation sequence.",
    options: [
      { text: "type House { relation rooms : Room[0 .. 5] order (Bedroom, LivingRoom); relation bathrooms : Bathroom[2]; } ...", feedback: "", isCorrect: false },
      { text: "type House { relation rooms : Room[1 .. 5] order (LivingRoom, Bedroom); relation bathrooms : Bathroom[2]; } type Room; type LivingRoom : Room; type Bedroom : Room; type Bathroom : Room;", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 105,
    text: "Automatically create assets for all order products on activation. Flow?",
    insight: "Assetize Order flow handles conversion from line items.",
    options: [
      { text: "Use the Assetize Order flow.", feedback: "", isCorrect: true },
      { text: "Use the Submit Order for Fulfillment flow.", feedback: "", isCorrect: false },
      { text: "Use the Activate action on the order.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 106,
    text: "Elements to define bundle logic and calculate price in procedure?",
    insight: "Bundle-Based Price and Price Adjustment Matrix are standard elements.",
    options: [
      { text: "Attribute-Based Price and Volume Discount", feedback: "", isCorrect: false },
      { text: "Bundle-Based Price and Price Adjustment Matrix", feedback: "", isCorrect: true },
      { text: "Bundle-Based Price and Product Selling Model", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 107,
    text: "Training asset amended on same day (+8 seats). Records count?",
    insight: "One action/period per discrete state change (initial + amendment).",
    options: [
      { text: "Two Asset Actions and one Asset State Periods", feedback: "", isCorrect: false },
      { text: "One Asset Actions and two Asset State Periods", feedback: "", isCorrect: false },
      { text: "Two Asset Actions and two Asset State Periods", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 108,
    text: "Spread calculated discount evenly across all lines. Element?",
    insight: "Discount Distribution Service handles proportional allocation.",
    options: [
      { text: "Add and configure the Formula Based Pricing element.", feedback: "", isCorrect: false },
      { text: "Add and configure the Aggregate Price element.", feedback: "", isCorrect: false },
      { text: "Add and configure the Discount Distribution Service element as the last step of pricing procedure.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 109,
    text: "Trace sequence of pricing actions applied. Tool?",
    insight: "Pricing Debug Mode provides detailed step-by-step logs.",
    options: [
      { text: "Check the Pricing Operations Console.", feedback: "", isCorrect: false },
      { text: "Check the Revenue Transaction Logs.", feedback: "", isCorrect: false },
      { text: "Check the Pricing Debug Mode Output.", feedback: "", isCorrect: true }
    ]
  },
  {
    id: 110,
    text: "One-click renewal capability from record page. Component?",
    insight: "Screen flow wrapping the InitiateRenewal invocable.",
    options: [
      { text: "A screen flow that utilizes the InitiateRenewal invocable action, which can then be exposed as a quick action on the Account or Contract record page", feedback: "", isCorrect: true },
      { text: "An Apex trigger on the Contract object.", feedback: "", isCorrect: false },
      { text: "A custom Renewal checkbox field.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 111,
    text: "Ramp products purchased June 20. July 5 call to cancel effective June 29. Earliest date?",
    insight: "Cancellations cannot be effective before the request date (July 5) in standard flow.",
    options: [
      { text: "July 5, 2025 - Cancel effective today", feedback: "", isCorrect: true },
      { text: "June 20, 2025 - Cancel the entire term", feedback: "", isCorrect: false },
      { text: "June 20, 2026- Cancel once term expires", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 112,
    text: "Billing Treatment hierarchy (Product vs Order Product)?",
    insight: "Order Product level overrides the Product level defaults.",
    options: [
      { text: "Billing Treatment resolution always prefers the Product Level.", feedback: "", isCorrect: false },
      { text: "Billing Treatment at the Order Product level overrides the Product Level Billing Treatment.", feedback: "", isCorrect: true },
      { text: "Billing Treatments are only evaluated when no Legal Entity is defined.", feedback: "", isCorrect: false }
    ]
  },
  {
    id: 113,
    text: "Transfer commercial specs (RAM/SSD) to technical components. Mechanism?",
    insight: "Field & Attributes Mapping in DRO handles spec transfer.",
    options: [
      { text: "Quote Line Mapping", feedback: "", isCorrect: false },
      { text: "Field & Attributes Mapping", feedback: "", isCorrect: true },
      { text: "Decomposition Execution Rules", feedback: "", isCorrect: false }
    ]
  }
];

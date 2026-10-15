import { ResourceItem } from '../types/resource'

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'lead-gen-bot',
    title: 'Automate Leads with Make & GPT-4o',
    description: 'Capture Instagram DM leads, qualify with AI lead scoring, and auto-sync straight into Notion & Google Sheets.',
    thumbnailUrl: '/images/reels/reel-DeKhhdTSe3V.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeKhhdTSe3V/',
    videoType: 'reel',
    category: 'Automation',
    badges: ['Automation', 'Workflow', 'Prompt', 'Template'],
    featured: true,
    views: '45K views',
    difficulty: 'Intermediate',
    prompt: {
      title: 'Lead Qualification & Scoring Prompt',
      modelRecommendation: 'GPT-4o or Claude 3.5 Sonnet',
      description: 'Use this prompt inside your Make.com OpenAI module to extract customer intent, budget, and urgency from raw chat transcripts.',
      text: `You are an executive AI sales qualification assistant for an agency/business.
Analyze the following user chat transcript and output structured JSON:

Chat Transcript:
"""{{1.messageText}}"""

Extract the following fields with strict precision:
1. "clientName": string or null
2. "serviceInterested": string (e.g., "Web Development", "AI Automation", "Consulting", "Workshop")
3. "estimatedBudget": string or "Unspecified"
4. "urgencyLevel": "High" | "Medium" | "Low"
5. "qualificationScore": integer from 1 to 10 (based on clarity of intent, budget viability, and urgency)
6. "recommendedAction": "Book VIP Call" | "Send Brochure" | "Follow Up in 48h" | "Disqualify"
7. "oneSentenceSummary": brief English summary for the CRM notification.

Return ONLY valid JSON with no conversational preamble or markdown code fences outside the JSON object.`,
    },
    guide: {
      summary: 'A complete step-by-step blueprint to build a hands-off Instagram DM lead intake and qualification pipeline in Make.com.',
      steps: [
        {
          stepNumber: 1,
          title: 'Connect Instagram Messaging Webhook',
          content: 'Set up an Instagram Business webhook module in Make.com to trigger whenever a new DM or comment keyword (e.g., "AUTOMATE") is received.',
          tip: 'Ensure your Instagram account is linked to a Meta Business Suite page to enable messaging API permissions.',
        },
        {
          stepNumber: 2,
          title: 'Add the OpenAI Qualification Module',
          content: 'Insert the OpenAI "Create a Chat Completion" node. Select model "gpt-4o", paste the qualification prompt above, and map the incoming message payload into the transcript variable.',
        },
        {
          stepNumber: 3,
          title: 'Route Leads by Score & Urgency',
          content: 'Add a Router filter: if qualificationScore >= 7, send an instant WhatsApp / Slack notification to your sales team with the direct calendar booking link.',
        },
        {
          stepNumber: 4,
          title: 'Log Record into Notion & Google Sheets',
          content: 'Map the extracted JSON fields (Client Name, Service, Score, Summary) into your primary CRM spreadsheet or Notion database table.',
        },
        {
          stepNumber: 5,
          title: 'Automated Friendly Auto-Reply',
          content: 'Send a personalized reply back into Instagram DM confirming receipt and providing the custom next step.',
        },
      ],
      downloadUrl: 'https://make.com',
      downloadLabel: 'Open Make.com Blueprint (.json)',
      fileFormat: 'JSON Blueprint',
    },
    links: [
      {
        title: 'Make.com Automation Platform',
        url: 'https://make.com',
        description: 'Visual integration platform to connect Instagram, OpenAI, and Sheets.',
        badge: 'Tool',
      },
      {
        title: 'OpenAI API Console',
        url: 'https://platform.openai.com',
        description: 'Get your API key and configure GPT-4o model parameters.',
        badge: 'API',
      },
      {
        title: 'Google Sheets CRM Lead Tracker',
        url: 'https://docs.google.com/spreadsheets',
        description: 'Free starter spreadsheet schema for tracking qualified inbound leads.',
        badge: 'Template',
      },
    ],
  },
  {
    id: 'sheets-dashboard',
    title: 'Live Google Sheets Dashboard with Zero Manual Formulas',
    description: 'Transform raw transaction data into a live executive KPI dashboard using AI formulas and Apps Script automations.',
    thumbnailUrl: '/images/reels/reel-DeHfT7LSFXZ.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeHfT7LSFXZ/',
    videoType: 'reel',
    category: 'Templates',
    badges: ['Template', 'Doc / Guide', 'Prompt'],
    featured: true,
    views: '62K views',
    difficulty: 'Beginner',
    prompt: {
      title: 'Dynamic Array & Query Formula Generator',
      modelRecommendation: 'ChatGPT Plus or Claude 3.7 Sonnet',
      description: 'Use this prompt to auto-generate complex Google Sheets QUERY, FILTER, and SPARKLINE formulas for any column layout.',
      text: `Act as a Google Sheets formula architect and data analyst.
Here is the schema of my raw data tab ('Raw_Data'!A:G):
- Col A: Timestamp (Date)
- Col B: Customer / Lead Name
- Col C: Category / Product
- Col D: Revenue (INR / USD)
- Col E: Status ('Completed', 'Pending', 'Refunded')
- Col F: Region ('Kerala', 'UAE', 'Other')
- Col G: Acquisition Channel ('Instagram', 'YouTube', 'Direct')

Write a single high-performance Google Sheets QUERY formula to build a dynamic monthly summary table:
1. Filter only 'Completed' status.
2. Group by Month and Category.
3. Calculate Total Revenue, Transaction Count, and Average Order Value.
4. Order by Total Revenue descending.
Provide the exact formula ready to paste into cell A1 of the 'Dashboard' sheet, along with a nested SPARKLINE formula for the trend line.`,
    },
    guide: {
      summary: 'How to take a standard spreadsheet and turn it into a CEO-ready visual dashboard in under 15 minutes.',
      steps: [
        {
          stepNumber: 1,
          title: 'Set Up Clean Normalized Data Tab',
          content: 'Keep your raw data in a dedicated tab called "Data". Never mix manual design or calculated total rows in this sheet.',
          tip: 'Use Ctrl+Shift+Down to format dates and currency consistently.',
        },
        {
          stepNumber: 2,
          title: 'Insert the Master QUERY Formula',
          content: 'Paste the generated formula into cell A4 of your "Dashboard" tab. It will dynamically populate the header and rows automatically.',
        },
        {
          stepNumber: 3,
          title: 'Add KPI Scorecards with Delta Indicators',
          content: 'Create 4 top metric cards: Total Revenue, Active Customers, Conversion Rate, and MoM Growth % using simple SUMIF comparisons.',
        },
        {
          stepNumber: 4,
          title: 'Embed Visual Sparkline Trendbars',
          content: 'Add mini in-cell bar charts using =SPARKLINE(D2:D13, {"charttype","bar";"color1","#74C640"}) for instant visual polish.',
        },
      ],
      downloadUrl: 'https://docs.google.com/spreadsheets',
      downloadLabel: 'Copy Google Sheets Dashboard Template',
      fileFormat: 'Google Sheet',
    },
    links: [
      {
        title: 'Google Workspace Gemini Add-on',
        url: 'https://workspace.google.com',
        description: 'Official AI assistant for Google Docs, Sheets, and Slides.',
        badge: 'Official',
      },
      {
        title: 'Apps Script Automation Snippets',
        url: 'https://developers.google.com/apps-script',
        description: 'Auto-refresh formulas every midnight and email summary reports.',
        badge: 'Docs',
      },
    ],
  },
  {
    id: 'claude-motion-graphics',
    title: 'Claude Motion Graphics & Code2Video Engine',
    description: 'Generate stunning SVG keyframe animations, typography kinetic banners, and Remotion video compositions with Claude.',
    thumbnailUrl: '/images/reels/reel-DdwL4g2S7Fj.jpg',
    videoUrl: 'https://www.instagram.com/reel/DdwL4g2S7Fj/',
    videoType: 'reel',
    category: 'Prompts',
    badges: ['Prompt', 'Workflow', 'Doc / Guide'],
    featured: true,
    views: '88K views',
    difficulty: 'Advanced',
    prompt: {
      title: 'Full Motion Graphic Component Prompt',
      modelRecommendation: 'Claude 3.7 Sonnet (Thinking Mode)',
      description: 'Generates a production-ready, interactive HTML5/SVG kinetic typography animation that runs at 60fps.',
      text: `Create a standalone, self-contained HTML/CSS/JS motion graphic canvas for a tech video intro.
Brand Specifications:
- Background: Minimalist dark charcoal (#0e140b) or clean ivory (#faf8f2)
- Accent Color: Brand Lime Green (#74C640) and electric emerald (#57a827)
- Typography: Sans-serif modern geometric font (Inter or Space Grotesk)
- Animation Duration: 5-second seamless loop

Required Scene Elements:
1. Dynamic animated grid lines with smooth bezier motion in the background.
2. Centered kinetic typography: "AI AUTOMATIONS THAT SCALE" with staggered letter reveal and glow filter.
3. Orbiting particle nodes connecting to a central glowing core.
4. Easing: cubic-bezier(0.16, 1, 0.3, 1) for snappy, modern tech aesthetics.

Output complete code inside a single HTML file with embedded CSS and vanilla JS requestAnimationFrame loop.`,
    },
    guide: {
      summary: 'Export high-resolution transparent video clips and web animations from Claude code artifacts.',
      steps: [
        {
          stepNumber: 1,
          title: 'Generate Animation in Claude Artifacts',
          content: 'Submit the prompt to Claude with Artifacts enabled. Test the responsive sizing and timing in the live preview.',
        },
        {
          stepNumber: 2,
          title: 'Fine-tune Easing and Speed',
          content: 'Ask Claude to adjust duration to match your voiceover tempo (e.g., "Make the title reveal finish in 1.8 seconds").',
        },
        {
          stepNumber: 3,
          title: 'Export to Transparent Video or Lottie',
          content: 'Use screen recording at 60fps or feed the code into Remotion / Puppeteer to render a transparent WebM/ProRes video clip.',
          tip: 'In CapCut or Premiere Pro, set blend mode to "Screen" or use transparent ProRes 4444 to overlay directly on your facecam.',
        },
      ],
      downloadUrl: 'https://github.com/remotion-dev/remotion',
      downloadLabel: 'Remotion React Video Template',
      fileFormat: 'GitHub Repo',
    },
    links: [
      {
        title: 'Claude AI Artifacts Playground',
        url: 'https://claude.ai',
        description: 'Anthropic Claude with live code rendering and execution.',
        badge: 'Tool',
      },
      {
        title: 'Remotion - Code-Based Video Creation',
        url: 'https://remotion.dev',
        description: 'Create real MP4 videos programmatically using React and CSS.',
        badge: 'Library',
      },
    ],
  },
  {
    id: 'chatgpt-website-builder',
    title: 'Create Websites with ChatGPT & Tailwind in 10 Min',
    description: 'Master prompt to generate responsive, high-converting landing pages ready for instant deployment on Vercel.',
    thumbnailUrl: '/images/reels/reel-DdtvhYrSJDJ.jpg',
    videoUrl: 'https://www.instagram.com/reel/DdtvhYrSJDJ/',
    videoType: 'reel',
    category: 'Prompts',
    badges: ['Prompt', 'Template', 'Doc / Guide'],
    featured: false,
    views: '71K views',
    difficulty: 'Beginner',
    prompt: {
      title: 'Full Landing Page Architecture Prompt',
      modelRecommendation: 'ChatGPT-4o or Claude 3.7 Sonnet',
      description: 'Generates a complete React + Tailwind component with hero, social proof, features grid, pricing, and FAQ.',
      text: `You are a Senior Frontend Engineer and UI/UX Designer specializing in high-converting SaaS landing pages.
Design and code a complete, modern responsive Landing Page for:
[INSERT YOUR PRODUCT OR SERVICE NAME HERE]

Design System Guidelines:
- Color Palette: Clean crisp white background (#ffffff), dark slate text (#0f172a), vibrant brand green accent (#74C640), soft subtle borders (#e2e8f0).
- Typography: Clean sans-serif hierarchy with bold hero typography and subtle micro-labels.
- Components to include:
  1. Sticky navigation header with brand logo, nav links, and CTA button.
  2. Hero section with pill badge, value proposition headline, subtitle, dual CTA buttons, and social proof numbers.
  3. Feature cards grid (3 columns) with custom SVG icons and subtle hover elevation.
  4. Interactive comparison/pricing table with a highlighted "Most Popular" plan.
  5. Accordion FAQ section with keyboard accessibility.
  6. Clean footer with legal links and social icons.

Output valid, production-ready React (TypeScript) code using Tailwind CSS classes. Ensure all buttons have explicit hover states and no external image placeholders fail.`,
    },
    guide: {
      summary: 'From text prompt to a live SSL website on your custom domain in 10 minutes.',
      steps: [
        {
          stepNumber: 1,
          title: 'Generate the Component Code',
          content: 'Fill in your business details in the prompt template above and run it in ChatGPT or Claude.',
        },
        {
          stepNumber: 2,
          title: 'Spin up a Vite + React Project',
          content: 'In your terminal, run `npx -y create-vite@latest my-site --template react-ts` and install Tailwind CSS.',
        },
        {
          stepNumber: 3,
          title: 'Paste and Test Locally',
          content: 'Save the generated code into `src/App.tsx` and run `npm run dev` to preview on localhost:5173.',
        },
        {
          stepNumber: 4,
          title: 'Deploy to Vercel in 60 Seconds',
          content: 'Push to GitHub or run `npx vercel` in your terminal to publish instantly to a global CDN with free HTTPS.',
        },
      ],
      downloadUrl: 'https://vercel.com',
      downloadLabel: 'Vercel Deployment Guide (PDF)',
      fileFormat: 'PDF Guide',
    },
    links: [
      {
        title: 'Tailwind CSS Documentation',
        url: 'https://tailwindcss.com',
        description: 'Utility-first CSS framework for rapid UI styling.',
        badge: 'Docs',
      },
      {
        title: 'Vercel Hosting',
        url: 'https://vercel.com',
        description: 'Zero-config frontend deployment platform.',
        badge: 'Hosting',
      },
    ],
  },
  {
    id: 'product-poster-ai',
    title: 'Product Photography & Poster Creation with AI',
    description: 'Hyper-realistic studio lighting prompts, camera angles, and poster composition workflow for e-commerce and marketing.',
    thumbnailUrl: 'https://img.youtube.com/vi/YSZioQKrHJE/hqdefault.jpg',
    videoUrl: 'https://youtu.be/YSZioQKrHJE',
    videoType: 'youtube',
    category: 'Prompts',
    badges: ['Prompt', 'Doc / Guide', 'Template'],
    featured: false,
    views: '28K views',
    difficulty: 'Intermediate',
    prompt: {
      title: 'Studio Product Photography Formula',
      modelRecommendation: 'Midjourney v6.1 or Flux.1 Pro',
      description: 'Generates studio-grade commercial product photographs with clean background isolation.',
      text: `Commercial studio product photography of a [INSERT PRODUCT: e.g., matte black ceramic coffee tumbler], placed on a minimalist travertine stone pedestal, surrounded by subtle botanical shadows and soft water ripples, dramatic rim lighting, softbox illumination from 45-degree angle, crisp depth of field, 85mm f/1.8 lens, high-end commercial packaging aesthetic, clean negative space for typography layout, 8k resolution, ultra-photorealistic, shot on Hasselblad H6D-100c --ar 4:5 --style raw --v 6.1`,
    },
    guide: {
      summary: 'The complete workflow from text prompt to finished commercial poster with typography.',
      steps: [
        {
          stepNumber: 1,
          title: 'Generate Base Studio Shots',
          content: 'Run the formula with 3 variations of camera angles: front-facing, elevated 45-degree, and top-down flat lay.',
        },
        {
          stepNumber: 2,
          title: 'Upscale & Background Separation',
          content: 'Upscale the best candidate and use Photoroom or Photoshop Generative Expand if additional canvas padding is needed.',
        },
        {
          stepNumber: 3,
          title: 'Add Typography & Badges in Canva or Figma',
          content: 'Overlay punchy editorial typography, price tags, and brand badges with proper contrast hierarchy.',
        },
      ],
      downloadUrl: 'https://canva.com',
      downloadLabel: 'Canva Poster Layout Templates',
      fileFormat: 'Figma / Canva',
    },
    links: [
      {
        title: 'Photoroom AI Photo Editor',
        url: 'https://www.photoroom.com',
        description: 'Remove backgrounds, replace lighting, and generate studio shadows.',
        badge: 'Tool',
      },
      {
        title: 'Midjourney Discord Server',
        url: 'https://discord.gg/midjourney',
        description: 'Official Midjourney generator community.',
        badge: 'Community',
      },
    ],
  },
  {
    id: 'business-automations-suite',
    title: '4 Essential Automations Every Business Needs',
    description: 'Detailed workflows for automated WhatsApp customer messaging, invoice creation, review requests, and CRM syncing.',
    thumbnailUrl: '/images/reels/reel-DeKhhdTSe3V.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeKhhdTSe3V/',
    videoType: 'reel',
    category: 'Automation',
    badges: ['Automation', 'Workflow', 'Doc / Guide'],
    featured: false,
    views: '54K views',
    difficulty: 'Intermediate',
    guide: {
      summary: 'The top 4 automations that save businesses 15+ hours per week with zero coding required.',
      steps: [
        {
          stepNumber: 1,
          title: 'Instant WhatsApp Inquiry Acknowledgment',
          content: 'Trigger: Incoming website or social inquiry. Action: Send personalized WhatsApp greeting with interactive menu buttons within 30 seconds.',
        },
        {
          stepNumber: 2,
          title: 'Automated GST Invoice Dispatch',
          content: 'Trigger: Payment received on Razorpay / Stripe. Action: Generate GST-compliant PDF invoice and auto-email with download link.',
        },
        {
          stepNumber: 3,
          title: 'Post-Purchase 5-Star Review Engine',
          content: 'Trigger: Order delivered / Service completed + 48 hours. Action: Send automated feedback check. If score >= 4, direct to Google Business Review page.',
        },
        {
          stepNumber: 4,
          title: 'Central Customer Hub Sync',
          content: 'Trigger: Any customer interaction across channels. Action: Update customer lifetime value and activity history in centralized spreadsheet/Notion.',
        },
      ],
      downloadUrl: 'https://make.com',
      downloadLabel: 'Download 4-in-1 Automation Checklist (PDF)',
      fileFormat: 'PDF Document',
    },
    links: [
      {
        title: 'WATI WhatsApp Business API',
        url: 'https://www.wati.io',
        description: 'Official WhatsApp Business solution provider for automated messaging.',
        badge: 'WhatsApp',
      },
      {
        title: 'Razorpay Webhook Documentation',
        url: 'https://razorpay.com/docs/webhooks',
        description: 'Set up real-time payment capture webhooks.',
        badge: 'Payments',
      },
    ],
  },
  {
    id: 'finance-feasibility-template',
    title: 'Financial Feasibility & Runway Model for Founders',
    description: 'Pre-built financial model calculator to analyze break-even points, CAC/LTV ratios, burn rate, and capital runway.',
    thumbnailUrl: '/images/reels/reel-DeMgc3iSBSo.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeMgc3iSBSo/',
    videoType: 'reel',
    category: 'Templates',
    badges: ['Template', 'Doc / Guide'],
    featured: false,
    views: '39K views',
    difficulty: 'Beginner',
    guide: {
      summary: 'Step-by-step framework to test whether your business idea is financially viable before spending money.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate True Unit Economics',
          content: 'Determine your Direct Cost of Goods Sold (COGS), payment gateway fees (2-3%), shipping/packaging, and gross margin per sale.',
        },
        {
          stepNumber: 2,
          title: 'Map Fixed Monthly Overhead',
          content: 'List salaries, software subscriptions, rent, and minimum marketing budget. This defines your monthly baseline burn rate.',
        },
        {
          stepNumber: 3,
          title: 'Calculate Break-Even Volume',
          content: 'Formula: Fixed Monthly Expenses / Gross Profit per Unit = Number of sales required per month to reach breakeven.',
        },
        {
          stepNumber: 4,
          title: 'Stress-Test with 3 Scenarios',
          content: 'Toggle the sheet between Conservative (-30% sales), Expected, and Aggressive (+50% sales) to see runway in months.',
        },
      ],
      downloadUrl: 'https://docs.google.com/spreadsheets',
      downloadLabel: 'Make a Copy of Financial Feasibility Model',
      fileFormat: 'Google Sheet',
    },
    links: [
      {
        title: 'Startup Runway Calculator',
        url: 'https://docs.google.com/spreadsheets',
        description: 'Visual spreadsheet model with automatic break-even charts.',
        badge: 'Template',
      },
    ],
  },
  {
    id: 'chatgpt-vs-claude-guide',
    title: 'ChatGPT Plus vs Claude Pro: Subscription Decision Matrix',
    description: 'Unbiased side-by-side comparison of reasoning models, coding prowess, token limits, and value-for-money analysis.',
    thumbnailUrl: '/images/reels/reel-DeCDMySS2x7.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeCDMySS2x7/',
    videoType: 'reel',
    category: 'Documents',
    badges: ['Doc / Guide'],
    featured: false,
    views: '93K views',
    difficulty: 'Beginner',
    guide: {
      summary: 'Which $20/month subscription should you pick based on your primary workflow?',
      steps: [
        {
          stepNumber: 1,
          title: 'Pick Claude Pro If You Do Coding & Long Documents',
          content: 'Claude 3.7 Sonnet with Thinking mode has unmatched coding accuracy, larger 200K token context, and superior Artifacts execution.',
        },
        {
          stepNumber: 2,
          title: 'Pick ChatGPT Plus If You Need Multimodal & Tools',
          content: 'ChatGPT excels with Voice Mode, DALL-E image generation, live web browsing, Custom GPTs, and mobile integration.',
        },
        {
          stepNumber: 3,
          title: 'The "Secret" Budget Strategy: API Usage',
          content: 'If you use AI intermittently, paying per API token via Anthropic or OpenAI Console usually costs less than $3-$5 per month instead of $20/month.',
        },
      ],
      downloadUrl: 'https://docs.google.com/document',
      downloadLabel: 'Download Full Comparison Matrix (PDF)',
      fileFormat: 'PDF Guide',
    },
    links: [
      {
        title: 'Anthropic Claude Console',
        url: 'https://console.anthropic.com',
        description: 'Pay-as-you-go API access for Claude 3.7 Sonnet.',
        badge: 'API',
      },
      {
        title: 'OpenAI Platform',
        url: 'https://platform.openai.com',
        description: 'Pay-as-you-go API access for GPT-4o and o3-mini.',
        badge: 'API',
      },
    ],
  },
  {
    id: 'ai-video-from-image',
    title: 'IMAGEൽ നിന്ന് Ai വീഡിയോ എങ്ങനെ ഉണ്ടാക്കാം',
    description: 'Turn any static portrait, landscape, or product image into a hyper-realistic cinema motion shot with camera control.',
    thumbnailUrl: 'https://img.youtube.com/vi/6SHw8_RScog/hqdefault.jpg',
    videoUrl: 'https://youtu.be/6SHw8_RScog',
    videoType: 'youtube',
    category: 'Automation',
    badges: ['Workflow', 'Prompt', 'Doc / Guide'],
    featured: false,
    views: '42K views',
    difficulty: 'Intermediate',
    prompt: {
      title: 'Video Camera Motion Prompt Tokens',
      modelRecommendation: 'Kling AI 1.5 or Luma Dream Machine',
      description: 'Camera direction tokens to ensure natural human movement and cinematic depth without artifacts.',
      text: `Slow cinematic dolly forward, subtle camera pan left, golden hour sunlight streaming through window, soft breeze gently rustling hair and clothing fabric, natural blink and serene smile, shallow depth of field, 35mm anamorphic lens flare, 4k hyper-detailed cinematic rendering, 60fps smooth fluid motion.`,
    },
    guide: {
      summary: 'Full video walkthrough showing how to animate still pictures into viral short-form videos.',
      steps: [
        {
          stepNumber: 1,
          title: 'Prepare High-Resolution Input Photo',
          content: 'Use an image with clear subject-background separation and high resolution (minimum 1080p).',
        },
        {
          stepNumber: 2,
          title: 'Input into Kling AI or Luma Dream Machine',
          content: 'Upload the image, select 5s or 10s duration, set motion intensity between 3 to 5 (avoid max to prevent distortion).',
        },
        {
          stepNumber: 3,
          title: 'Upscale and Add Sound Effects',
          content: 'Upscale video with Topaz Video AI or CapCut, and add ambient sound effects or Malayalam voiceover.',
        },
      ],
      downloadUrl: 'https://klingai.com',
      downloadLabel: 'Camera Motion Cheat-Sheet (.txt)',
      fileFormat: 'Text Reference',
    },
    links: [
      {
        title: 'Kling AI Generator',
        url: 'https://klingai.com',
        description: 'State of the art image-to-video AI generator.',
        badge: 'Tool',
      },
      {
        title: 'Luma Dream Machine',
        url: 'https://lumalabs.ai/dream-machine',
        description: 'High-speed cinematic video generation.',
        badge: 'Tool',
      },
    ],
  },
  {
    id: 'claude-full-mastery-guide',
    title: 'Claude full ആയി use ചെയ്യുന്നുണ്ടോ? Complete Masterclass',
    description: 'Master Claude Projects, custom style instructions, Artifacts, and prompt chaining for 10x developer and creator output.',
    thumbnailUrl: '/images/reels/reel-DeEh8mLtN_R.jpg',
    videoUrl: 'https://www.instagram.com/reel/DeEh8mLtN_R/',
    videoType: 'reel',
    category: 'Documents',
    badges: ['Doc / Guide', 'Prompt'],
    featured: false,
    views: '51K views',
    difficulty: 'Intermediate',
    prompt: {
      title: 'Claude Project Custom System Instructions',
      modelRecommendation: 'Claude 3.7 Sonnet',
      description: 'Add this to your Claude Project instructions to enforce senior engineer output on every response.',
      text: `You are a Senior Principal Software Architect and Tech Lead.
Always adhere to these standards:
1. Always write TypeScript in strict mode.
2. Favor clarity, composability, and explicit error handling over clever one-liners.
3. When providing UI code, always use Tailwind CSS with cohesive, accessible color schemes.
4. Keep components under 200 lines and modularize helper logic into hooks.
5. Provide explanations of architectural trade-offs alongside code solutions.`,
    },
    guide: {
      summary: '5 advanced Claude techniques that top engineers use daily.',
      steps: [
        {
          stepNumber: 1,
          title: 'Set up Dedicated Claude Projects',
          content: 'Group your codebase documents, style guides, and API schemas into project files so Claude has instant persistent memory.',
        },
        {
          stepNumber: 2,
          title: 'Leverage Live Artifacts',
          content: 'Ask Claude to render React components and SVGs directly inside the Artifacts side-panel for real-time iteration.',
        },
        {
          stepNumber: 3,
          title: 'Prompt Chaining for Complex Tasks',
          content: 'Split complex requests: Step 1: Outline architecture -> Step 2: Review and critique -> Step 3: Implement production code.',
        },
      ],
      downloadUrl: 'https://claude.ai',
      downloadLabel: 'Claude Prompt Pack (.md)',
      fileFormat: 'Markdown File',
    },
    links: [
      {
        title: 'Anthropic Prompt Engineering Guide',
        url: 'https://docs.anthropic.com',
        description: 'Official best practices from the Claude research team.',
        badge: 'Official',
      },
    ],
  },
]

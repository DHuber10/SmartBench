# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/bdec61b1-d07f-4b1b-afa6-6cd476f3ad27

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bdec61b1-d07f-4b1b-afa6-6cd476f3ad27) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Setting up a Supabase Development Environment

This project uses Supabase for backend services. Follow these steps to set up a development environment:

### Prerequisites

1. **Install Homebrew** (for macOS):
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   
   After installation, you may need to add Homebrew to your PATH:
   ```sh
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```

2. **Install Supabase CLI**:
   ```sh
   brew install supabase/tap/supabase
   ```
   
   Alternative installation methods:
   - Using curl: `curl -s https://raw.githubusercontent.com/supabase/cli/main/install.sh | bash`
   - Using Docker: `docker run --rm -it --pull always supabase/cli:latest supabase --version`

### Setting Up on the Supabase Website

1. **Create a Supabase Project**:
   - Go to [app.supabase.com](https://app.supabase.com/)
   - Sign in or create an account
   - Click "New Project"
   - Enter a name for your project (e.g., "bench-buddy-dev")
   - Set a secure database password
   - Choose a region closest to you
   - Click "Create new project"

2. **Get Your API Keys**:
   - Once your project is created, go to the project dashboard
   - In the left sidebar, click on "Project Settings" → "API"
   - Note down both the `anon public` key and the `service_role` key

3. **Set Up Database Schema**:
   - Go to the "Table Editor" or "SQL Editor" in your Supabase dashboard
   - Create tables and relationships as needed for your application

### Setting Up Locally

1. **Login to Supabase**:
   ```sh
   supabase login
   ```
   You'll be prompted to enter your access token from [app.supabase.com/account/tokens](https://app.supabase.com/account/tokens)

2. **Initialize Supabase in Your Project**:
   ```sh
   cd <YOUR_PROJECT_NAME>
   supabase init
   ```

3. **Start Local Supabase Services**:
   ```sh
   supabase start
   ```
   This will start a local Docker instance with PostgreSQL, Auth, Storage, etc.

4. **Link Your Local Setup to Your Remote Project** (optional but recommended):
   ```sh
   supabase link --project-ref <your-project-ref>
   ```
   Replace `<your-project-ref>` with your project reference ID from the Supabase dashboard URL.

5. **Pull the Remote Database Schema** (if you've already set up tables on the website):
   ```sh
   supabase db pull
   ```

### Configure Your Application

1. **Create Environment Variables**:
   Create a `.env` file in your project root:
   ```sh
   touch .env
   ```

2. **Add Supabase Configuration**:
   Edit the `.env` file to include:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

   For local development, you can use:
   ```
   VITE_SUPABASE_URL=http://localhost:54321
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
   (The exact values will be shown in your terminal after running `supabase start`)

### Development Workflow

1. **Local Development**:
   - Run your local Supabase instance: `supabase start`
   - Run your application: `npm run dev`
   - Access the local Supabase Studio UI at `http://localhost:54323`

2. **Database Migrations**:
   - Create migrations: `supabase migration new my_migration_name`
   - Apply migrations: `supabase db push`

3. **Deploying Changes**:
   - Push schema changes to your remote project: `supabase db push`
   - Or reset your remote database to match local: `supabase db reset`

4. **Testing Authentication**:
   - Enable authentication methods in the Supabase dashboard under "Authentication" → "Providers"
   - For local development, manage users through the Supabase Studio UI

5. **Stopping Local Services**:
   ```sh
   supabase stop
   ``'

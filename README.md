# SmartInvestment Landing Page

A conversion-focused, premium landing page template built for the SmartInvestment App. This project features a modern, dynamic aesthetic with smooth micro-interactions and scroll animations.

![SmartInvestment Overview](https://via.placeholder.com/1200x630.png?text=SmartInvestment+App)

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

To get this project up and running on your local machine, follow these steps.

### Prerequisites

You will need **Node.js** installed on your computer. 
- You can download it from [nodejs.org](https://nodejs.org/).
- Ensure you install **Node.js v18.17** or later.

To check if you already have Node installed, open your terminal and run:
```bash
node -v
npm -v
```

### Installation

1. **Clone or Download the repository:**
   If you downloaded the `.zip` file, extract it to a folder. If you are using Git, run:
   ```bash
   git clone https://github.com/aurennz14/SmartInvestment_App.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd SmartInvestment_App
   # or whatever you named your local folder
   ```

3. **Install the dependencies:**
   This command will look at the `package.json` file and install everything needed (like Next.js, Tailwind, and Framer Motion) into a local `node_modules` folder.
   ```bash
   npm install
   ```

### Running the App Locally

Start the development server with:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page in action! Any changes you make to the code will auto-update in the browser.

---

## 📁 Project Structure

- `app/` - The main Next.js App Router. Contains the layout and the main page.
- `components/` - Reusable React components (`Navbar`, `Button`, `MockupCards`).
- `tailwind.config.ts` - Tailwind CSS configuration and custom color palettes.

## 🛠 Customization
- **Colors:** You can change the main brand colors by editing the `theme.extend.colors` object inside `tailwind.config.ts`.
- **Text & Copy:** The main text elements are located inside `app/page.tsx` and `components/MockupCards.tsx`.

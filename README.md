# 🛍️ Vihanic Touches

A modern e-commerce web application built with cutting-edge technologies. Shop seamlessly, even offline, with our Progressive Web App (PWA) capabilities.

## What's This Project About?

This is a full-featured online store where customers can browse products, add items to their cart, and complete purchases using Stripe payments. The app works offline too, so you never lose your shopping experience!

## ✨ Features

- **Product Catalog** - Browse beautiful product listings with images and descriptions
- **Shopping Cart** - Add, remove, and adjust quantities with ease
- **Secure Checkout** - Payment processing powered by Stripe
- **Offline Support** - Works even without internet connection (PWA)
- **Real-time Inventory** - Track product availability
- **Responsive Design** - Looks great on mobile, tablet, and desktop

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Prisma** - Database ORM for PostgreSQL
- **Stripe** - Payment processing
- **Tailwind CSS** - Modern styling
- **Zustand** - State management
- **PWA** - Progressive Web App capabilities

## 📋 Prerequisites

Before you start, make sure you have:

- Node.js (v18 or higher)
- A PostgreSQL database (free options: [Neon](https://neon.tech), [Supabase](https://supabase.com))
- A Stripe account for payments (free test mode: [Stripe Dashboard](https://dashboard.stripe.com))

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/vihanic_touches?schema=public"

# Stripe (get from https://dashboard.stripe.com/test/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

### 3. Set Up the Database

```bash
npx prisma generate
npx prisma db push
npm run seed
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Happy shopping! 🎉

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Check code quality
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run seed` - Populate database with sample products

## 🗂️ Project Structure

```
├── src/
│   ├── app/              # Next.js pages and API routes
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions
│   └── stores/          # State management
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Sample data
└── public/              # Static assets
```

## 🤝 Contributing

Feel free to fork this project and make it your own! If you find any bugs or have suggestions, please open an issue.

## 📄 License

This project is open source and available under the MIT License.

---

Developed By Indudhar Adi

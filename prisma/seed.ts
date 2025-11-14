import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { slug: "classic-tee" },
    update: {},
    create: {
      title: "Classic Tee",
      slug: "classic-tee",
      description: "100% cotton. Your daily driver t-shirt.",
      priceCents: 1999,
      images: {
        create: [
          {
            url: "https://picsum.photos/seed/tee/800/800",
            alt: "Classic Tee",
            sort: 0
          }
        ]
      },
      inventory: {
        create: { quantity: 25 }
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: "premium-hoodie" },
    update: {},
    create: {
      title: "Premium Hoodie",
      slug: "premium-hoodie",
      description: "Cozy heavyweight fleece for cold days.",
      priceCents: 4999,
      images: {
        create: [
          {
            url: "https://picsum.photos/seed/hoodie/800/800",
            alt: "Premium Hoodie",
            sort: 0
          }
        ]
      },
      inventory: {
        create: { quantity: 10 }
      }
    }
  });

  await prisma.product.upsert({
    where: { slug: "Hoodie Combo" },
    update: {},
    create: {
      title: "Hoodie Combo",
      slug: "Hoodie Combo",
      description: "Hoodie Combo with pure cotton made fabric.",
      priceCents: 4999,
      images: {
        create: [
          {
            url: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/sign/products/download.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMzYxOGIxNy1kYzQ3LTQxYTktYWQ2Yy0zMTZhMWU4ZmQzYzgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9kdWN0cy9kb3dubG9hZC5qcGciLCJpYXQiOjE3NjMwNTc1MzEsImV4cCI6MTc2NTY0OTUzMX0.ZD4Exw6OnObXtkpjUMuhXoeZmw51NttUopdgS1l1lco",
            alt: "Hoodie Combo",
            sort: 0
          }
        ]
      },
      inventory: {
        create: { quantity: 25 }
      }
    }
  });
  await prisma.product.upsert({
    where: { slug: "Pure Cotton Tee" },
    update: {},
    create: {
      title: "Pure Cotton Tee",
      slug: "Pure Cotton Tee",
      description: "Pure Cotton Tee with high quality fabric.",
      priceCents: 999,
      images: {
        create: [
          {
            url: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/sign/products/tshirt%201.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMzYxOGIxNy1kYzQ3LTQxYTktYWQ2Yy0zMTZhMWU4ZmQzYzgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9kdWN0cy90c2hpcnQgMS5qcGciLCJpYXQiOjE3NjMwNTc3MTAsImV4cCI6MTc2NTY0OTcxMH0.04xbO3LIPF8IbX2ly8BJRASnLHRzu015qpR9S9PeWJU",
            alt: "Pure Cotton Tee",
            sort: 0
          }
        ]
      },
      inventory: {
        create: { quantity: 5 } 
      }
    }
  });
  
}


main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
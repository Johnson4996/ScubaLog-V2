import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const password = await hash('test', 12)
    const user = await prisma.user.upsert({
      where: { email: 'test@test.com' },
      update: {},
      create: {
        email: 'test@test.com',
        name: 'Test User',
        password
      },
    })
    console.log({ user })

    const dive = await prisma.dive.create({
      data: {
        date: new Date(), // Use the current date/time for the dive
        location: 'Test Location',
        duration: 60, // Example duration of the dive in minutes
        maxDepth: 20, // Example maximum depth reached during the dive
        avgDepth: 15, // Example average depth of the dive
        waterTemp: 25, // Example water temperature during the dive
        visibility: 20, // Example underwater visibility during the dive
        current: 'Mild', // Example current conditions during the dive
        weather: 'Sunny', // Example weather conditions during the dive
        diveType: 'Recreational', // Example type of dive
        buddy: 'Dive Buddy', // Example name of dive buddy
        notes: 'Test dive notes', // Example additional notes about the dive
        userId: user.id // Associate the dive with the user
      }
    });
    console.log({ dive })
}


main()
.then(() => prisma.$disconnect())
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
        
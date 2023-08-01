import prisma from '@/app/libs/primsadb'


export default async function Listings () {

    try{
        const Listing = await prisma.listing.findMany({
            orderBy:{
                createdAt:'desc'
            }
        })

        const safeListings = Listing.map((data) => ({
            ...data,
            createdAt: data.createdAt.toISOString(),
        }))
        return safeListings;  
    } catch(error: any)
    {
        throw new Error(error);
    }
}
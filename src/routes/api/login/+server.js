export async function POST({request,cookies}) {
    const body  = await request.json();
    const { username, password } = body; 
    if (username === 'Hans' && password === '') {
        cookies.set ('session', 'admin', { httpOnly: true, path :'/'}); //cookies 
        return new Response ('Logged in', {status: 200});
    } else {
        return new Response('Unauthorized', {status: 401});
    
    }
}
// const prisma = new PrismaClient(); 
// const hash = await bcrypt.hashSync(body.pass); 
// const res = awair prisma.user.create({
//     data: {
//         email: body.email 
//         name: body.name,
//         hashPass: hash 
//     }
// }); 
// console.log(res) 
// return new Response('Created', { status: 201}); 


export async function POST({ request, cookies }) {
    const body = await request.json();
    const prisma = new PrismaClient();
    const res = await prisma.dairy.create({
        data: {
            authorId: request.user.id,
            title: body.title,
            content: body.content
        }
    });
    return new Response('Created', { status: 201 });
}

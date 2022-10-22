interface ItemTypes  {
    title: string,
    to: string,
    id: string
}

export const navItems:ItemTypes[] = [
    {
        title: 'Home',
        to: "/",
        id: "home"
    },
    {
        title: 'News',
        to: "/news",
        id: "news"
    },
    {
        title: 'Signin',
        to: "/signin",
        id: "signin"
    },


]
import { Container, Title, TopBar } from "@/components/shared";


export default function ProductPage() {
    return (
    <>
        <Container className='mt-10'>
            <Title text='Все пиццы' size="lg" className="font-extrabold"/>
        </Container>   
        <TopBar/>
    </>
    )
}
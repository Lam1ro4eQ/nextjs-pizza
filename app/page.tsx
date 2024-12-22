import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function ProductPage() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
                список товаров
              {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

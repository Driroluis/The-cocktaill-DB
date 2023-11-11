/* eslint-disable react/prop-types */
const Characters = ({ data }) => {
  return (
    <section className="py-8">
      <div className="container flex flex-col gap-8 px-2 mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-zinc-400">Bebidas</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
          {data?.map(element => {
            const { idDrink, strDrink, strAlcoholic,strInstructionsES, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4} = element;
            return (
              <div
                key={idDrink}
                className="flex flex-col overflow-hidden rounded-2xl"
              >
                <img
                  src={strDrinkThumb}
                  alt={strDrink}
                  width={256}
                  height={256}
                  className="object-cover w-full h-64"
                />
                <div className="flex flex-col h-full gap-2 p-4 bg-stone-600">
                  <a href=''>
                    <h3 className="text-2xl font-bold">{strDrink}</h3>
                  </a>
                  <h4 className="text-base font-semibold">Tipo: {strAlcoholic}</h4>
                  <div href='' className="text-sm"><span className="font-bold">Instrucciones: </span> {strInstructionsES}</div>
                  <div href='' className="text-sm"><span className="font-bold">Ingredientes:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4} </div>
                  <a href='' className="self-start px-8 py-2 mt-auto font-semibold transition-colors text-zinc-900 bg-neutral-300 rounded-2xl hover:bg-amber-200 hover:text-sky-950">Hacer Pedido</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;
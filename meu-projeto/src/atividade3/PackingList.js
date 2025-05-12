function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? <del>{name} ✔</del> : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h2>Lista de Viagem</h2>
      <ul>
        <Item isPacked={true} name="Passaporte" />
        <Item isPacked={false} name="Carregador" />
        <Item isPacked={true} name="Escova de dentes" />
      </ul>
    </section>
  );
}

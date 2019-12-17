import React from 'react';

export default function Table() {
  let items = [
        {
          'id': 1,
          'term': 'term 1',
          'description': 'descr 1'
        },
        {
          'id': 2,
          term: 'term 2',
          description: 'descr 2'
        },
        {
          'id': 3,
          'term': 'term 3',
          'description': 'descr 3'
        }
    ];
  return (
      <table>
        <tr>
          <Columns items={items} />
        </tr>
      </table>
  );
}

function Columns(props) {
  console.log(props.items);
  return (
    <dl>
      {props.items.map(item => (
        // Sem a `key`, React irá disparar um aviso
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
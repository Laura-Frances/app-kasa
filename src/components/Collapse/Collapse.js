import AnimationCollapse from '../AnimationCollapse/AnimationCollapse';
import '../Collapse/Collapse.scss';

const Collapse = () => {
  const menuItems = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
      index: 0
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      index: 1
    },
    {
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      index: 2
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécureité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
      index: 3
    },
  ];

  return (
    <div className="collapse">
      {menuItems.map((menuItem) => ( // itère sur le tableau menuItems, et pour chaque élément rend AnimationCollapse avec ses props :
        <AnimationCollapse
          key={menuItem.index}
          className="collapse-menu-item"
          title={menuItem.title}
          content={menuItem.content}
          index={menuItem.index}
        />
      ))}
    </div>
  );
};
export default Collapse;

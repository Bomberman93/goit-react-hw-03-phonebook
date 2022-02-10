import styles from './filter.module.css';

const Filter = ({filterForm}) => {
  console.log({filterForm})
  return (
    <div className={styles.container}>
      Find contacts by name
      <input type="text" name="filter" onChange={filterForm} />
    </div>
  );
};
export default Filter;

import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Category() {
  const { status, showStatus } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" className="statusbtn" onClick={handleClick}>
        Status
      </button>
      {showStatus && <div>{status}</div>}
    </>
  );
}

export default Category;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actions } from '../../redux/actions';
import { StoreState } from '../../types';

const useProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, productDetail, error } = useSelector(
    (state: StoreState) => ({
      isLoading: state.isLoading,
      productDetail: state.productDetail,
      error: state.error,
    })
  );

  useEffect(() => {
    if (id) {
      dispatch(actions.getProductDetail(id));
    }
  }, [id, dispatch]);

  return { isLoading, productDetail, error };
};

export default useProductPage;
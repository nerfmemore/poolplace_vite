import style from '../SinglePromo/singlepromo.module.scss'
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const GET_SINGLE_PROMO = gql`
query SinglePromo($id: ID!) {
    post(id: $id) {
      content
      id
      title
    }
  }
`;

function Promo() {
    const {state} = useLocation();
    const {loading, error, data} = useQuery(GET_SINGLE_PROMO, {
        variables: {
            id: `${state}`,
        }
      });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>

    const content = data.post.content;
    const normalizedContent = content.replace(/\s+/g, ' ').trim();

    return (
        <>
        <div className={style.wrapper}>
            <h2 className={style.title}>{data.post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: normalizedContent}}/>
        </div>
        </>
    )
}

export default Promo;
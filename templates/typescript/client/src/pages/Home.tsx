import {useSelector} from 'react-redux';
import {State} from '@/store';
import Container from '@/components/Container.tsx';
import tw from '@/utilities/tailwindcss';

const Home = () => {

    const accessToken = useSelector<State>(state => state.accessToken.value);

    return (
        <>
            <Container className={tw('')}>
                <div className={tw('mt-6 text-center')}>
                    client
                </div>
            </Container>
        </>
    );
};

export default Home;
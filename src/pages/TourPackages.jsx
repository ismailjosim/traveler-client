import PageHeading from '../utilities/PageHeading';
import TourCard from '../components/TourPackages/TourSections/TourCard';
import { useGetTourPackagesQuery } from '../redux/features/api/apiSlice';
import Loading from '../utilities/Loading';
import Error from '../utilities/Error';

const TourPackages = () => {
    const { data, isError, isLoading } = useGetTourPackagesQuery();

    let content = null;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <Error message="No Videos Found!" />
    }

    if (!isLoading && !isError && data.length === 0) {
        content = <Error message="No Videos Found!"></Error>
    } else {
        content = data?.packages.map((item, idx) => <TourCard key={ idx } item={ item } />)
    }


    return (
        <section>
            <PageHeading headTitle={ 'Tour Packages' } />
            <div className='w-11/12 mx-auto'>
                { content }
            </div>
        </section>
    )
};

export default TourPackages;

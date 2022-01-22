import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../SampleData';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title={`User Analytics`} data={userData} dataKey={`Active User`} grid={true} />
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;

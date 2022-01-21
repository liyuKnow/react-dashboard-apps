import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './FeaturedInfo.css';

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$1,000,000</span>
                    <span className="featured-money-rate">-11.3 <ArrowDownward className='money-rate-icon down' /> </span>
                </div>
                <span className="featured-sub">Compared To last month.</span>
            </div>

            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$986,000</span>
                    <span className="featured-money-rate">-11.3 <ArrowDownward className='money-rate-icon down' /> </span>
                </div>
                <span className="featured-sub">Compared To last month.</span>
            </div>

            <div className="featured-item">
                <span className="featured-title">Coast</span>
                <div className="featured-money-container">
                    <span className="featured-money">$760,000</span>
                    <span className="featured-money-rate">9.3 <ArrowUpward className='money-rate-icon up' /> </span>
                </div>
                <span className="featured-sub">Compared To last month.</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;

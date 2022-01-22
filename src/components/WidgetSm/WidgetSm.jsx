import { Visibility } from '@material-ui/icons';
import './WidgetSm.css';

const WidgetSm = () => {
    return (
        <div className="widget-sm">
            <h3 className="widget-sm-title">New Joined Members</h3>
            <ul className="widget-sm-list">
                <li className="widget-sm-list-item">
                    <img className="widget-sm-list-item-avatar" src="https://i.pravatar.cc/400?img=25" alt="" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-list-username">Miyu Yung</span>
                        <span className="widget-sm-user-job-title">Software Developer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-button-icon' />
                        <span className="widget-sm-button-text">Display</span>
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img className="widget-sm-list-item-avatar" src="https://i.pravatar.cc/400?img=16" alt="" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-list-username">Betelhem Hailu</span>
                        <span className="widget-sm-user-job-title">Web Developer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-button-icon' />
                        <span className="widget-sm-button-text">Display</span>
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img className="widget-sm-list-item-avatar" src="https://i.pravatar.cc/400?img=32" alt="" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-list-username">Betelhem Hailu</span>
                        <span className="widget-sm-user-job-title">Web Developer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-button-icon' />
                        <span className="widget-sm-button-text">Display</span>
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img className="widget-sm-list-item-avatar" src="https://i.pravatar.cc/400?img=31" alt="" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-list-username">Betelhem Hailu</span>
                        <span className="widget-sm-user-job-title">Web Developer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-button-icon' />
                        <span className="widget-sm-button-text">Display</span>
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img className="widget-sm-list-item-avatar" src="https://i.pravatar.cc/400?img=11" alt="" />
                    <div className="widget-sm-user">
                        <span className="widget-sm-list-username">Betelhem Hailu</span>
                        <span className="widget-sm-user-job-title">Web Developer</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-button-icon' />
                        <span className="widget-sm-button-text">Display</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;

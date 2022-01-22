import './WidgetLg.css';
const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widget-lg-button " + type.toLowerCase()}>{type}</button>;
    };
    return (
        <div className="widget-lg">
            <h3 className="widget-lg-title">Latest transactions</h3>
            <table className="widget-lg-table">
                <thead>
                    <tr className="widget-lg-table-row">
                        <th className='widget-lg-table-head'>Customer</th>
                        <th className='widget-lg-table-head'>Date</th>
                        <th className='widget-lg-table-head'>Amount</th>
                        <th className='widget-lg-table-head'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widget-lg-table-row">
                        <td className="widget-lg-user">
                            <img
                                src="https://i.pravatar.cc/400?img=39"
                                alt=""
                                className="widget-lg-user-img"
                            />
                            <span className="widget-lg-user-name">Susan Carol</span>
                        </td>
                        <td className="widget-lg-date">2 Jun 2021</td>
                        <td className="widget-lg-amount">$122.00</td>
                        <td className="widget-lg-status">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widget-lg-table-row">
                        <td className="widget-lg-user">
                            <img
                                src="https://i.pravatar.cc/400?img=39"
                                alt=""
                                className="widget-lg-user-img"
                            />
                            <span className="widget-lg-user-name">Susan Carol</span>
                        </td>
                        <td className="widget-lg-date">2 Jun 2021</td>
                        <td className="widget-lg-amount">$122.00</td>
                        <td className="widget-lg-status">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widget-lg-table-row">
                        <td className="widget-lg-user">
                            <img
                                src="https://i.pravatar.cc/400?img=39"
                                alt=""
                                className="widget-lg-user-img"
                            />
                            <span className="widget-lg-user-name">Susan Carol</span>
                        </td>
                        <td className="widget-lg-date">2 Jun 2021</td>
                        <td className="widget-lg-amount">$122.00</td>
                        <td className="widget-lg-status">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widget-lg-table-row">
                        <td className="widget-lg-user">
                            <img
                                src="https://i.pravatar.cc/400?img=39"
                                alt=""
                                className="widget-lg-user-img"
                            />
                            <span className="widget-lg-user-name">Susan Carol</span>
                        </td>
                        <td className="widget-lg-date">2 Jun 2021</td>
                        <td className="widget-lg-amount">$122.00</td>
                        <td className="widget-lg-status">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLg;

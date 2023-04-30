import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // Unmount 안하면 시작부터 2개가 띄워짐
    // strictMode로 인한 영향이라고 함
    // https://www.inflearn.com/questions/619705/notificationlist-jsx-%EC%B1%95%ED%84%B0-6%EC%9E%A5-%EC%8B%A4%EC%8A%B5-%EB%82%B4%EC%9A%A9-%EC%A7%88%EB%AC%B8-%EB%8F%99%EC%8B%9C%EC%97%90-2%EA%B0%9C%EC%94%A9-%EB%82%98%EC%98%B4
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => (
                    <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}
                    />
                ))}
            </div>
        );
    }
}

export default NotificationList;
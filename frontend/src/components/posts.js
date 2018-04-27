import React, { Component } from 'react'
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button'
import List from 'antd/lib/list';


class Posts extends Component {

    render() {
        const { posts, upVote, downVote } = this.props
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={posts}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText type="user" text={`Posted by ${item.author}`} />,
                            <Button icon="like" onClick={(event) => upVote(item.id)} />,
                            <IconText type="star-o" text={item.voteScore} />,
                            <Button icon="dislike" onClick={(event) => downVote(item.id)}/>,
                            <IconText type="message" text={item.commentCount} />]}
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.category}
                        />
                        {item.body}
                    </List.Item>
                )}
            />
        );
    }
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default Posts
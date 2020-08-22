import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null) {
          return(
            <div className="col-12 col-md-5 m-1">
                  <Card>
                      <CardImg top src={dish.image} alt={dish.name} />
                      <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
            </div>
          );
  
        } else {
          return(<div></div>);
        }
      }

      renderComments(dish) {
        if (dish == null) {
            return (<div></div>)
        }
        const cmnts = dish.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }

      render () {
        const dish = this.props.dish
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish)
          return(
        <div className="row">
                {dishItem}
                {commentItem}
        </div>
          )
      }
}

export default Dishdetail;
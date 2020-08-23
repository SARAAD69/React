import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


   function RenderDish({dish}) {
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
      }

    function RenderComments({dish}) {
        const cmnts = dish.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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

      const DishDetail = (props) => {
        if (props.dish != null) {
        const dishItem = <RenderDish dish={props.dish}/>
        const commentItem = <RenderComments dish={props.dish}/>
          return(
            <div className="container">
                <div className="row">
                        {dishItem}
                        {commentItem}
                </div>
            </div>
          )
        } else {
          return(<div></div>);
        }
      }

export default DishDetail;
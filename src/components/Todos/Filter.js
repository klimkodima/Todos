import React from 'react';
import { filterChange } from '../../reducers/filterReducer';
import { connect } from 'react-redux';
import  styled  from "styled-components";

const Wrapper = styled.div`{
  display: flex;
}
`;

const Label = styled.label`{
  display: inline-block;
	cursor: pointer;
	padding: 0px 15px;
	line-height: 34px;
	border: 1px solid #999;
	border-radius: 6px;
	user-select: none;
}
&:hover {
	color: #666;
}
`

const Input = styled.input`{
  display: none;
}
&:hover{
  cursor:pointer;
}
:checked + ${Label} {
	background: lightgrey;
}
:disabled + ${Label} {
	background: #efefef;
	color: #666;
}
`;

const Button = styled.div`{
  display: inline-block;
	margin-right: 20px;
}
&:hover{
  cursor:pointer;
}
`

const Filter = (props) => {

  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }

  return (
    <Wrapper>
     <Button checked onClick={handleChange}>
        <Input id="all" type="radio" name="radio" value="all"/>
        <Label for="all">All</Label>
      </Button>
      <Button onClick={handleChange}>
        <Input id="completed" type="radio" name="radio" value="completed" />
        <Label for="completed">Completed</Label>
      </Button>
      <Button onClick={handleChange}>
        <Input id="active" type="radio" name="radio" value="active"/>
        <Label for="active">Active</Label>
      </Button>
    </Wrapper>
  )
}

export default connect(null, { filterChange })(Filter)
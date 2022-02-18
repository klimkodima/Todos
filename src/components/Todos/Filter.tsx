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
`;

const Filter = (props: { filterChange: (arg0: any) => void; }) => {

  const handleChange = (event: any) => {
    props.filterChange( event.currentTarget.firstChild.value)
  }

  return (
    <Wrapper>
     <Button  onClick={(e) =>handleChange(e)}>
        <Input id="all" type="radio" name="radio" value="ALL"/>
        <Label htmlFor="all">All</Label>
      </Button>
      <Button onClick={(e) =>handleChange(e)}>
        <Input id="completed" type="radio" name="radio" value="COMPLETED" />
        <Label htmlFor="completed">Completed</Label>
      </Button>
      <Button onClick={(e) =>handleChange(e)}>
        <Input id="active" type="radio" name="radio" value="ACTIVE"/>
        <Label htmlFor="active">Active</Label>
      </Button>
    </Wrapper>
  )
}

export default connect(null, { filterChange })(Filter)
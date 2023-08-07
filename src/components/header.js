import './header.css';

function Header(){
return (
<div>
<title>Phone Information System</title>

<ul>
    <MenuItem name="Home" />
    <Task1 task1="Enter Record"/>
    <Task2 task2="Update Record"/>
</ul>


</div>

)
}

function MenuItem(props)
{
    return <li><a href = "#">{props.name}</a></li>
}

function Task1(props)
{
   return <li><a href = "#">{props.task1}</a></li>
}

function Task2(props)
{
    return <li><a href = "#">{props.task2}</a></li>
}

export default Header;


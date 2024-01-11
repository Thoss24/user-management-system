import classes from './Header.module.css';

const Header: React.FC<{}> = () => {
 return(
    <div className={classes.header}>
        <h1>User management system</h1>
    </div>
 )
}

export default Header
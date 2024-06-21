import './TypingLoader.css';


export const TyPingLoader = ( {className}: {className?:string} ) => {
    return (
        <div className={`typing ${className}`}>
            <span className="circle scaling"></span>
            <span className="circle scaling"></span>
            <span className="circle scaling"></span>
        </div>
    )
}

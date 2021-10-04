    // const nav = (
    //     <div>
    //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //             <div className="container-fluid">
    //                 <Link className="navbar-brand" to="/">TextUtils</Link>
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                         <li className="nav-item">
    //                             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //                         </li>
    //                         <li className="nav-item">
    //                             <button className="nav-link" onclick={()=>{document.getElementById('meshv').innerHTML = "Hey there this is react website."}}>TextUtils</button>
    //                         </li>
    //                         <li className="nav-item">
    //                             <Link className="nav-link" to="/footer">Footer</Link>
    //                         </li>
                            
    //                         <li className="nav-item">
    //                             <Link className="nav-link" to="/about" tabindex="-1" >About</Link>
    //                         </li>
    //                     </ul>
    //                     <form className="d-flex">
    //                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                         <button className="btn btn-outline-success" type="submit">Search</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>
    // );

    'use strict';

    const e = React.createElement;
    
    class Navbar extends React.Component {
        constructor(props) {
            super(props);
            this.state = { clicked: false };
          }
        
      render() {
        if (this.state.clicked) {
          return 'Hey You clicked this.';
        }
    
        return e(
          'button',
          { onClick: () => this.setState({ clicked: true }) },
          'click'
        );
      }
    }
    
    const domContainer = document.querySelector('#Navbar');
    ReactDOM.render(e(Navbar), domContainer);
    

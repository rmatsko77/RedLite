import './Header.css';

export function Header() {


    return (
        <div className="header">
            <div className="logos">
                <img
                    src="/favicon.png"
                    alt="RedLite logo"
                    id="logo">
                </img>
                <img
                    src="/text-icon.png"
                    alt="RedLite logo"
                    id="text-logo">
                </img>
            </div>
            <form onSubmit=''>
            <label><img 
                    src="/search-icon.png"
                    id='search-icon'
                    alt=''>
                        </img></label>
            <input
                type="text"
                placeholder="Search Subreddits"
                >
            </input>
          </form>
        </div>
    )
}
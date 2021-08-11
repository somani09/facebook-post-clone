import React, {useEffect, useState} from 'react'
import axios from "axios";

function Giphy({showGifBlock,setShowGifBlock, gifToPost, setGifToPost }) {
    

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);
    
    const [typingTimeout, setTypingTimeout] = useState('')

    const handleSearchChange = (e) => {
        const text = e.target.value;
        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => {
            searchGif(text);
        }, 1000);   
        setTypingTimeout(timeout);
    }

    const searchGif = (text) => {
        
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            setData([])
            try {
                if(text)
                    {var results = await axios("https://api.giphy.com/v1/gifs/search", {
                        params: {
                        api_key: "GvOlQQCsFU7kvD7OznuQpGV6NWLUryC7",
                        limit: 10,
                        rating: 'g',
                        q:text
                        }
                    });}
                    else{
                        var results = await axios("https://api.giphy.com/v1/gifs/trending", {
                            params: {
                            api_key: "GvOlQQCsFU7kvD7OznuQpGV6NWLUryC7",
                            limit: 10,
                            rating: 'g'
                            }
                        });
                    }
              
              console.log("new results",results);
              setData(results.data.data);
            } catch (err) {
              setIsError(true);
              setTimeout(() => setIsError(false), 4000);
            }
      
            setIsLoading(false);
          };
      
          fetchData();
    }

    const renderError = () => {
      if (isError) {
        return (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Unable to get Gifs, please try again in a few minutes
          </div>
        );
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
    
          try {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
              params: {
                api_key: "GvOlQQCsFU7kvD7OznuQpGV6NWLUryC7",
                limit: 10,
                rating: 'g'
              }
            });
    
            console.log(results);
            setData(results.data.data);
          } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
          }
    
          setIsLoading(false);
        };
    
        fetchData();
      }, []);

    const renderGifs = () => {
        if (isLoading) {
          return <div>Loading...</div>;
        }
        return data.map(el => {
          return (
            <div key={el.id} className="gif"  onClick={(e) => {setGifToPost(el.images.fixed_height.url);setShowGifBlock(false)}}>
              <img src={el.images.fixed_height.url} />
            </div>
          );
        });
      };

    return (
        <div>
          {renderError()}
            <div 
                style={{ visibility: showGifBlock ? 'visible': 'hidden'}} 
                className="gif-block col align-center">
                <div className="search-gif-container center">
                    <input className="search-gif" placeholder=" Search GIF " onChange={e=>handleSearchChange(e)}/>
                </div>
                    <div className="gif-area row">{renderGifs()}</div>
            </div>
            <div onClick={e=>setShowGifBlock(false)} style={{ visibility: showGifBlock ? 'visible': 'hidden'}} className="blank-back"></div>
        </div>
    )
}

export default Giphy

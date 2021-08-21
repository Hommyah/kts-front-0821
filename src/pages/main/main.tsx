import React, {ChangeEvent} from "react";
import 'styles/main.css'
import LibStore from "store/LibStore";
import {BookType} from "store/LibStore/types";

const Main = () => {

    const [query, setQuery] = React.useState<string>("");
    const [books, setBooks] = React.useState<Array<BookType>>([])
    const [imgTest, setImgTest] = React.useState<Array<string>>([]);

    const handleQuery = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
    }, [])

    const handleClick = React.useCallback(() => {
        const q = "Harry Potter"
        const test = new LibStore()
        test.searchByQuery(q, 10, 0).then(books => {
            console.log(books);
            setBooks(books)
            setImgTest(books.map((b)=>(`https://covers.openlibrary.org/b/id/${b.coverId}-M.jpg`)));
        })
    }, [])


    return (
        <div className='page'>
            <div className='head'>Электронная библиотека</div>
            <div className='sear'>
                <input className='search' placeholder='Введите название книги или имя автора' value={query}
                       onChange={handleQuery}/>
                <button className='btn' onClick={handleClick}>Поиск</button>
            </div>
            <div>
                <div className='popularBook'>Популярные книги:</div>
                <div className='popularBook__list'>
                    {books.map((b, i)=>{
                        return <div key={i}><div>{b.title}</div><img src={imgTest[i]} alt={"oops"}/></div>})}
                </div>
            </div>
            <div>
                <div className='popularAuthor'>Популярные авторы:</div>
                <div className='popularAuthor__list'>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                    <div className='author'>
                        <div className='author__img'></div>
                        <div className='author__name'>a</div>
                        <div className='author__surname'>a</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;

import * as React from 'react';
import 'styles/main.css'
import LibStore, {BookType}  from "store/LibStore";

const Main = () => {

    const [query, setQuery] = React.useState<string>("");
    const [books, setBooks] = React.useState<Array<BookType>>([])
    const [imgTest, setImgTest] = React.useState<Array<string>>([]);

    const handleQuery = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
    }, [])

    const handleClick = React.useCallback(() => {
        const query = "Harry Potter"
        const test = new LibStore()
        test.searchByQuery(query, 10, 0).then(books => {
            setBooks(books)
            setImgTest(books.map((b)=>(`https://covers.openlibrary.org/b/id/${b.coverId}-M.jpg`)));
        })
    }, [])


    return (
        <div className='page'>
            <div className='head'>Электронная библиотека</div>
            <div className='seek'>
                <input className='search' placeholder='Введите название книги или имя автора' value={query}
                       onChange={handleQuery}/>
                <button className='btn' onClick={handleClick}>Поиск</button>
            </div>
            <div>
                <div className='popularBook'>Популярные книги:</div>
                <div className='popularBook__list'>
                    {books.map((book, idx)=>{
                        return <div key={idx}><div>{book.title}</div><img src={imgTest[idx]} alt={"oops"}/></div>})}
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

const bookRepo = [];
function AddBook(){
    let newBook = document.getElementById("inputBook").value;
    let status = document.getElementsByClassName("addStatus");
    if(bookRepo.includes(newBook))
    {
        status[0].innerHTML = "Sorry, Entered book is already available in the repository.";
    }
    else
    {
        bookRepo.push(newBook);
    }
    document.getElementById("inputBook").value = "";
}

function SearchBook(){
    let searchVal = document.getElementById("inputBookSearch").value;
    let status = document.getElementsByClassName("addStatus");
    status[0].innerHTML = " ";

    const searchBookFn = (book) => {
        searchVal = searchVal.toUpperCase();
        book = book.toUpperCase();

        if(searchVal === book)
        {
            return book;
        }
        else if(book.includes(searchVal))
        {
            return book;
        }
    }
    let searchBook = bookRepo.filter(searchBookFn);
    if(searchBook.length>0)
    {
        status[1].innerHTML = `Results matching your search keyword: <br> ${searchBook}`;
    }
    else
    {searchBook
        status[1].innerHTML = "Sorry, No matches found.";
    }
}
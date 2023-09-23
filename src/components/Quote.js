import React, { useState, useEffect } from 'react';

function Quote() {
  const [quoteD, setQuoteD] = useState({
    quote: '',
    author: '',
    loading: true,
    error: '',
  });

  useEffect(() => {
    const category = 'fear';
    const apiKey = 'QhIZ4yn9aAJns00FmcPjkQ==7UzA0vhMAkRAAu0i';

    // Construct the API URL with the category
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuoteD({
            quote: data[0].quote,
            author: data[0].author,
            loading: false,
            error: null,
          });
        } else {
          throw new Error('No data found');
        }
      })
      .catch((err) => {
        setQuoteD({
          quote: null,
          author: null,
          loading: false,
          error: err.message,
        });
      });
  }, []);

  const {
    loading, error, quote, author,
  } = quoteD;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Today&apos;s quote</h2>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
}

export default Quote;

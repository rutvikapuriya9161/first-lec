import React from 'react';

function Loading(Components) {
    return function WithLoading({ isLoading, data }) {
        if (isLoading) {
            return (
                <p>Loading....</p>
            )
        } else {
            return (
                <Components data={data} />
            )
        }
    }
}

export default Loading
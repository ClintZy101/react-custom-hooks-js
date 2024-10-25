import React from "react";
import useFetchComments from "../useCustomHooks/useFetch";
import useAddComment from "../useCustomHooks/useAddComment";

export default function Comments() {
    // refetch can be used as a callback function  in useAddComment
  const { comments, isLoading, error, refetch } = useFetchComments();
  const {submitError, isSubmitting, commentRef } = useAddComment(refetch);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {comments?.map((comment) => {
            <div></div>;
          })}
        </div>
      )}
    </div>
  );
}

const Loading = () => <div>Loading</div>;
const Error = () => <div>Error</div>;

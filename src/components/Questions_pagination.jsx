import React from 'react';
import { useState,useEffect } from 'react';
import Pagination_component from "./Pagination_component";
import Pagination from "./Pagination";
export default function Questions_pagination() {

    const questions=[ 
        { question_description:"Question 1",
          id:1,
          options:["opt11","opt12","opt13","opt14"],
          question_type:"Multiple Choice Questions",
          correct_answer:["opt12"]
        },
        { question_description:"Question 2",
           id:2,
          options:["opt21","opt22","opt23"],
          question_type:"Checkbox",
          correct_answer:["opt22","opt23"]
        },
        { question_description:"Question 3",
           id:3,
          options:["opt31","opt32"],
          question_type:"Multiple Choice Questions",
          correct_answer:["opt32"]
        },
        { question_description:"Question 4",
           id:4,
          options:["opt41","opt42"],
          question_type:"Checkbox",
          correct_answer:["opt42"]
        },
        { question_description:"Question 5",
           id:5,
          options:["opt51","opt52","opt53","opt54"],
          question_type:"Checkbox",
          correct_answer:["opt51","opt52","opt53"]
        },
        { question_description:"Question 6",
           id:6,
          options:["opt61","opt62","opt63","opt64"],
          question_type:"Multiple Choice Questions",
          correct_answer:["opt63"]
        },
        { question_description:"Question 7",
           id:7,
          options:["opt71","opt72","opt73","opt74"],
          question_type:"Multiple Choice Questions",
          correct_answer:["opt72"]
        },
        { question_description:"Question 8",
           id:8,
          options:["opt81","opt82","opt83","opt84"],
          question_type:"Checkbox",
          correct_answer:["opt82"]
        },
];





    return (
        <div>
      {questions.length > 0 ? (
        <>
          <Pagination
            data={questions}
            Pagination_component={Pagination_component}
            title="Posts"
            pageLimit={3}
            dataLimit={3}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
       )
}

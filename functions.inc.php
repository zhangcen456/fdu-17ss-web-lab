<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $id1=${"postId".$number};
    $id2=${"userId".$number};
    $user=${"userName".$number};
    $sdate=${"date".$number};
    $sthumb=${"thumb".$number};
    $stitle=${"title".$number};
    $sexcerpt=${"excerpt".$number};
    $sreviews=${"reviewsNum".$number};
    $sreviewsr=${"reviewsRating".$number};
    $imgTags=constructRating($sreviewsr);
    $link1=generateLink("post.php?id=".$id1,'<img src="images/'.$sthumb.'" alt="'.$stitle.'" class="img-responsive"/>',"");
    $link2=generateLink("user.php?id=".$id2,$user,"");
    $link3=generateLink("post.php?id=".$id1,'Read more',"btn btn-primary btn-sm");
    $strall='<div class="row"><div class="col-md-4">'.$link1.'</div><div class="col-md-8"> <h2>'.$stitle.'</h2><div class="details">Posted by '.$link2.'<span class="pull-right">'.$sdate.'</span><p class="ratings">'.$imgTags.' '.$sreviews.' Reviews</p></div><p class="excerpt">'.$sexcerpt.'</p><p>'.$link3.'</p></div></div><hr/>';
    echo $strall;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>
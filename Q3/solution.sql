SELECT *, count(category.category_id) as num_of_categories FROM article 
INNER JOIN owner ON article.owner_id = owner.owner_id
LEFT JOIN category_article_mapping ON article.article_id = category_article_mapping.article_id
LEFT JOIN category ON category_article_mapping.category_id = category.category_id
GROUP BY owner.owner_id ORDER BY num_of_categories DESC;
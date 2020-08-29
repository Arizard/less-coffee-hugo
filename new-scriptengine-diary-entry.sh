DOC_NUMBER=$(ls content/posts/dev-diary/scriptengine | grep scriptengine-dd- | wc -l)
DOC_NUMBER=$(($DOC_NUMBER + 1))
DOC_NUMBER=$(printf "%03d" $DOC_NUMBER)
hugo new "posts/dev-diary/scriptengine/scriptengine-dd-$DOC_NUMBER/index.md";

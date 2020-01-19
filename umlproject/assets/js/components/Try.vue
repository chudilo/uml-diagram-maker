<template>
    <div>
        <p>This is just a try.</p>

            <div class="modals-default-cl">
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#addArticle">Add new Article</button>
                    <form v-on:submit.prevent="addArticle">
                      <div class="form-group">
                        <label for="article_title">Article Title</label>
                        <input type="text" class="form-control" placeholder="Article Title" v-model="newArticle.article_title">
                      </div>

                      <div class="form-group">
                        <label for="article-body">Article Body</label>
                          <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="newArticle.article_body"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Save changes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </form>
            </div>
    </div>

</template>

<script>
</script>

<style>
</style>